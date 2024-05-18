if (btnName !== "") {
    if(pageTitle !==""){ 
      var numb = updatesContentId?.match(/\d/g);
      numb = numb?.join("");
      let idCount=numb;
      btnDiv.appendChild(dropImg)
      btnDiv.appendChild(linkDiv)
      btnDiv.appendChild(clickTag)
      btnDiv.appendChild(deleteTag)
      if(btnType === "popup"){
          if(popupType === "image"){
            if(popupImage !==""){
              $('#createModal').modal('hide');
              updatesContent.appendChild(btnDiv);
              btnContainerArray[`${parentId}`] = {btnCount, name: btnName,btnType:"popup", popupType:"image",image:popupImage, bgColor: btnColor,btnLocation, btnPosition, updates:`updates${idCount}` }
              tempArray[`${parentId}`] = { type: "8", name: btnName, btnType:"popup", popupType:"image",image:popupImage, bgColor: btnColor,btnLocation, btnPosition, updates:`updates${idCount}` }
            } 
          }else if(popupType === "pdf"){
            if(popupPdf !== ""){
              $('#createModal').modal('hide');
              updatesContent.appendChild(btnDiv);
              btnContainerArray[`${parentId}`] = { name: btnName,btnType:"popup", popupType:"pdf",pdf:popupPdf,btnLocation, btnPosition, bgColor: btnColor,updates:`updates${idCount}` }
              tempArray[`${parentId}`] = { type: "8", name: btnName, btnType:"popup", popupType:"pdf",pdf:popupPdf,btnLocation, btnPosition, bgColor: btnColor,updates:`updates${idCount}` }
            }
          }else if(popupType === "link"){
            if(hasEmptyValue === false){
              $('#createModal').modal('hide');
              updatesContent.appendChild(btnDiv);
              btnContainerArray[`${parentId}`] = { name: btnName,btnType:"popup", popupType:"link",links:links,btnLocation, btnPosition, bgColor: btnColor,updates:`updates${idCount}` }
              tempArray[`${parentId}`] = { type: "8", name: btnName, btnType:"popup", popupType:"link",links:links,btnLocation, btnPosition, bgColor: btnColor,updates:`updates${idCount}` }
            }
          }
      }else{
        if(btnLink !== ""){
          $('#createModal').modal('hide');
          updatesContent.appendChild(btnDiv);            
          btnContainerArray[`${parentId}`] = { name: btnName,btnType:"link", link: btnLink,btnPosition, bgColor: btnColor,updates:`updates${idCount}` }
          tempArray[`${parentId}`] = { type: "8", name: btnName,btnType:"link", link: btnLink,btnPosition, bgColor: btnColor,updates:`updates${idCount}` }
        }
      }
    }
    else{
      btnDiv.appendChild(dropImg)
      btnDiv.appendChild(linkDiv)
      btnDiv.appendChild(clickTag)
      btnDiv.appendChild(deleteTag)

      if(btnType === "popup"){
        if(popupType === "image"){
          if(popupImage !==""){
            $('#createModal').modal('hide');
            contentCards.appendChild(btnDiv);
            btnContainerArray[`${parentId}`] = { name: btnName,btnType:"popup", popupType:"image",image:popupImage,btnLocation:btnLocation, btnPosition:btnPosition, bgColor: btnColor }
            tempArray[`${parentId}`] = { type: "8", name: btnName, btnType:"popup", popupType:"image",image:popupImage, btnLocation, btnPosition, bgColor: btnColor}
          } 
        }else if(popupType === "pdf"){
          if(popupPdf !== ""){
            $('#createModal').modal('hide');
            contentCards.appendChild(btnDiv);
            btnContainerArray[`${parentId}`] = { name: btnName,btnType:"popup", popupType:"pdf",pdf:popupPdf,btnLocation:btnLocation, btnPosition:btnPosition, bgColor: btnColor}
            tempArray[`${parentId}`] = { type: "8", name: btnName, btnType:"popup", popupType:"pdf",pdf:popupPdf,btnLocation:btnLocation, btnPosition:btnPosition, bgColor: btnColor }
          }
        }else if(popupType === "link"){
          if(hasEmptyValue === false){
            $('#createModal').modal('hide');
            contentCards.appendChild(btnDiv);
            btnContainerArray[`${parentId}`] = { name: btnName,btnType:"popup", popupType:"link",links:links,btnLocation, btnPosition, bgColor: btnColor }
            tempArray[`${parentId}`] = { type: "8", name: btnName, btnType:"popup", popupType:"link",links:links,btnLocation, btnPosition, bgColor: btnColor}
          }
        }
    }else{
      if(btnLink !== ""){
        $('#createModal').modal('hide');
        contentCards.appendChild(btnDiv);            
        btnContainerArray[`${parentId}`] = { name: btnName,btnType:"link",btnPosition, link: btnLink, bgColor: btnColor }
        tempArray[`${parentId}`] = { type: "8", name: btnName,btnType:"link",btnPosition, link: btnLink, bgColor: btnColor}
      }
    }
    
    }

    let childElem = document.getElementById(`linkTag${buttonId}`)

   // childElem.style.backgroundColor = btnColor
    submitBtnDiv.style.display = "block";
 
    buttonId += 1;

    console.log(tempArray)

  } else {

    let inputName = document.querySelector("#btnName")
    let inputLink = document.querySelector("#btnLinkId")

    let errorName = document.querySelector(".btnError")
    let errorLink = document.querySelector(".linkError")

    if (inputName.value === "") {
      if (!errorName) {
        inputName.insertAdjacentHTML('afterend', '<p class="error btnError">Please enter the button name...!</p>');
      }

    } else {
      if (errorName) {
        errorName.remove()
      }
    }
    if (inputLink.value === "") {
      if (!errorLink) {
        inputLink.insertAdjacentHTML('afterend', '<p class="error linkError">Please enter the link...!</p>');
      }

    } else {
      if (errorLink) {
        errorLink.remove()
      }
    }
  }