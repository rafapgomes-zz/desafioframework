
function getapiinfo()
{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => table(json))

}

function table(json)
{
    var array = []
    obj = JSON.parse(JSON.stringify(json))
    for(var i=0; i<obj.length; i++)
    {
        array.push([obj[i].userId,obj[i].title,obj[i].body])
    }
    console.log(array)

    $(document).ready(function() {
     $('#example').DataTable( {
      "language": {
        "url": "https://cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json"
    },
       data: array,
        columns: [
          { title: "USER ID" },
          { title: "Title" },
          { title: "Body" },
          ]
     } );
  } );
}

getapiinfo();
