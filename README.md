# Add-View-data-
## POST and GET Operations in Angular 16 using HTTP requests

In this application, I've used HttpClient's methods - get and post  to perform  operations on the  json data which is run locally with json-server at http://localhost:3000/user

## Why write a Service?
In Angular application, it is always a best practice to separate data presentation logic usually written in a Component and data access logic written in a Service.

Services are available to all classes and could be injected in any class throughout our application. Hence, it is good to write the data access logic in a Service (shown below)

## Making a POST request
userData(data:user): Observable<any>{
    return this.http.post('http://localhost:3000/user',data)
  }

## Making a GET request
GetData(){
    return this.http.get ('http://localhost:3000/user')
  }

## Project Output 

### Home Page / Add data
![Screenshot (608)](https://github.com/user-attachments/assets/b964e31f-c2e7-440b-a783-d00776cfe586)

### View Data
![Screenshot (609)](https://github.com/user-attachments/assets/1cb81ce8-65de-41e2-8a8c-32e293ebb177)
