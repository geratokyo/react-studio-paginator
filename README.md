# react-studio-paginator

A react paginator component that displays a list of items in a numbered page

----

## Props
----
|Name|Type|Descriptions|
|-----|------|---|
|customElement|(index:number)=> React.ReactNode|This is a method that will be called to retrieve a single item of the paginator.|
|elementsPerView?|number|The number of elements to be shown in one page|
|totalElements|number|Total number of elements to be shown in different pages|
|defaultPageIdx?|number|This can be set if you need to start the page from a different index|
|showPaginatorControls?|boolean|True if it should show the controls and the page numbers|
|className?|string|Parent element class name|
|previousButton?|React.ReactNode|Component for the previous button|
|nextButton?|React.ReactNode|Component for the next button|
pageStatusComponent?|(currentPage:number, totalPages:number) =>React.ReactNode|This is a function to show the current page status|


## Default Props
----
|Name|Default|
|---|---|
|className|```""```| 
|showPaginatorControls|```true```| 
|elementsPerView|```10```| 
|previousButton|```<button>Previous</button>```| 
|nextButton|```<button>Next</button>```| 
|pageStatusComponent|```(e,i)=> `${e} of ${i}`}```| 


## Usage

```
import {Paginator} from "react-studio-paginator";
```


#### Simple Example

```
<Paginator 
    totalElements={data.length}
    customElement={(idx)=>{
        let item = data[idx];
        return <div>{item.label}</div>
    }}
/>
```