import requests
import json 

if __name__ == '__main__':
    url = 'https://httpbin.org/post'
    payload = {'nombre':'VICTOR', 'materia':'INFORMATICA'}
    response = requests.post(url, json=payload)
    print(response.url)
    
       
    if response.status_code == 200:      
        print(response.content)
