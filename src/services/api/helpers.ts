import 'isomorphic-unfetch'

interface headerProps {
  [key: string]: string
}

export function checkStatus(response: any) {
  if (!response.ok && response.statusText) {
    const error = new Error()
    error.message = response
    error.name = response.status
    throw error
  } else if (!response.ok && response.non_field_errors) {
    const error = new Error()
    error.message = response
    error.name = response.status
    throw error
  }
  return response
}

export function parseJSON(response: any) {
  return response.json().then((resJson: any) => {
    if (typeof resJson == 'string') {
      resJson = {
        data: resJson
      }
    }
    resJson.responseStatus = response.status
    resJson.ok = response.ok
    resJson.headers = response.headers
    return resJson
  })
}

export function apiCall(
  url: string,
  data?: any,
  method = 'get',
  hasFile = false,
  token = null
) {
   process.env.NODE_ENV !== 'production' &&
    console.log('-------api called-----', url)
  let headers: headerProps = {
    'Content-Type': 'application/json'
  }
  let fetchOptions: RequestInit = {
    headers: {},
    method: method,
    credentials: 'include'
  }
  let formattedData
  if (data) {
    
    if (hasFile) {
      // File uploads can't send as json - change to form
      let form_data = new FormData()
      for (var key in data) {
        form_data.append(key, data[key])
      }
      formattedData = form_data
      delete headers['Content-Type']
    } else {
      formattedData = JSON.stringify(data)
    }
  }

  if (token) {
    headers['Authorization'] = `JWT ${token}`
  }
  fetchOptions.headers = headers
  if (formattedData) {
    fetchOptions.body = formattedData
  }

  const resp = fetch(url, fetchOptions)
    .then(response => {
      if (response.status === 403) {
        return response
      }
      return checkStatus(response)
    })
    .then(response => {
      let res = parseJSON(response)
      if (response.status >= 200 && response.status <= 299) {
        res.ok = true
      }

      if (response.status >= 400 && response.status <= 499) {
        res.ok = false
      }
      return res
    })
    .catch(error => {
      const response = error.message
      if (response) {
        error.status = response.status
        error.statusText = response.statusText
      }
      return error
    })

  return resp
}