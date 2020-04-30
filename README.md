# mocktest1
Steps to setup the Project  
1.Install Node.js  depending on your operating system  
2.npm init :-It is used to setup npm package   
3.npm install --save express  
4.Do "npm install" to install all dependency as per project requirement.   

These are four API made in the project:-

1. APi to addProduct  
route:-/api/v1/products/create  
Method:POST
Input/Req:  
product:{
    {"name":"tv"  
    ,"quantity":2}  
}  
Response:    
"data": {
        "product": {  
            "name": "tv",  
            "quantity": 2 
        }  
    }  
    
2.Api to get lis of all products  
route:/api/v1/products/    
Method:GET
Req:{}
Respomse:  
{
    "data": {
        "product": [
            {
                "_id": 3,
                "name": "Fridssdde",    
                "quantity": 2,
                "__v": 0
            },   
            {
                "_id": 4,
                "name": "Fssdde",
                "quantity": 2,
                "__v": 0
            }    
        ]    
    }    
}   

3.Api to delete product by using params   
route:/api/v1/products/ :id   
Method:Delete  
req:pass id in URl   
res:{  
    "message": "Product deleted successfully"  
}


4.Update quantity of product    
route:products/:id/update_quantity/?number=10     
Method:Post    
req:pass id of product and number by which increase or decrease in query param     
res:{
    "product": {  
        "_id": 10,  
        "name": "de",  
        "quantity": 12, 
        "__v": 0   
    },
    "message": "Product quantity updated successfully"  
}





