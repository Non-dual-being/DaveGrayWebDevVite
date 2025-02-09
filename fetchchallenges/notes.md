      ```jsx
      
      <main>
        {  {fetchError}  ?  ( <p className = "ErrorPara">{fetchError}</p> ) : 
        (
          <JSONList JSONObjList = {jsonList} />
        )}
      </main>
    ```

    dit is fout om dat {} fetch error een leeg object maakt en dus altijd waar is dan , moet zonder {}