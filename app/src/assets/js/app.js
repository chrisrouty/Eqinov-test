const axios = require('axios');
const Twig = require('twig');

import "../scss/index.scss";
// import "../images/logo.png";

const API_URL = 'http://localhost:8080/eqinov/front/test';

const getDatas = async function(){
  try{
    const res = await fetch(API_URL)
    if(res.ok){
      let data = await res.json()

      document.getElementById('data-name').innerHTML = data.name;
      document.getElementById('data-type').innerHTML = data.type;
      document.getElementById('data-siret').innerHTML = data.siret;
      document.getElementById('data-dispo').innerHTML = data.Dispo;
      document.getElementById('data-contrat').innerHTML = data.Contrat;
      document.getElementById('data-address').innerHTML = `${data.address.street} <span>${data.address.postcode} ${data.address.city}</span>`;

      //List Contact
      const listContact = data.contacts.map(item => {
        return `
          <div>
            <div>
              <picture>
                  <span class="iconify" data-icon="bi-people-circle" data-inline="false">&nbsp;</span>
              </picture> 
              <h3>${item.firstname} ${item.lastname}</h3>
              <span>${item.function}</span>
            </div>
          </div>
        `
      });
      document.getElementById('data-contacts').innerHTML = listContact.join('');
      
      //List conso Client
      const consoClient = data.conso.slice(0, 11).map(item => {
        return `<div>${item.value}</div>`
      })
      document.getElementById('data-conso').innerHTML = consoClient.join('');

    } else {
      console.error(res.status);
    }
  } catch(e){
    console.log(e);
  }
}

getDatas();
