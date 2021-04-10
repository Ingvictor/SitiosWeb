import requests

if __name__ == '__main__':+

    url = 'https://httpbin.org/get'
    #url = 'https://httpbin.org/get?nombre=victor&materia=informatica'
    args = {'nombre':'VICTOR', 'materia':'INFORMATICA'}
    response = requests.get(url, params=args)
    print(response.url)
    
    
    
    if response.status_code == 200:
        #print(response.content)
        content = response.content
        print (content)


Petición en query https://httpbin.org/get?nombre=Victor&Materia=informatica
