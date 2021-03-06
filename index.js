  const fileInput = document.getElementById("file-submit");
      const fileOutput = document.getElementById('output');

      fileInput.addEventListener("change",() => {
        const [file] = fileInput.files;

        if(file){
          const reader = new FileReader();
          reader.addEventListener("load",() => {
            const plainElements = reader.result;
            const htmlMarkedUp = marked.parse(plainElements);
            fileOutput.innerHTML = htmlMarkedUp;

            const outPutDiv = document.getElementById('output');
            let areTheseHeadings = Array.from(outPutDiv.querySelectorAll("h1,h2,h3,h4,h5,h6"));
            let allElementsInOutput = Array.from(outPutDiv.querySelectorAll('*'));

            let mapOverElements = allElementsInOutput.map((element) => {
              return element.innerHTML;
            });

            console.log(mapOverElements,"<= mapOverElements");
            console.log(outPutDiv.querySelectorAll("h1,h2,h3,h4,h5,h6"),"<= headings only");
          });
          reader.readAsText(file);

        }
      })

console.log("This is the way");

