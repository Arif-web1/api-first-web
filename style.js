const load_phone = async (searchText=14) => {
  const response = await fetch(
  ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await response.json();
  const phones = data.data;
  //   console.log(phones);
  container_all_data(phones);
};
const container_all_data = (phone) => {
  
  
    const card_container = document.getElementById("container");
    const button_bottom=document.getElementById('button-btn');
    card_container.textContent='';

    console.log(phone.length); 
    if (phone.length>=12) {
      button_bottom.classList.remove('hidden');
    } else {
      button_bottom.classList.add('hidden')
    }
  
   phone=phone.slice(0, 12);

  phone.forEach((phone_element) => {
    // console.log(phone_element);
    const div = document.createElement("div");
    div.classList = `card bg-base-100 w-96 shadow-xl bg-white pt-4`;
    div.innerHTML = `
     <figure>
              <img
                src="${phone_element.image}"
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title font-semibold text-black">${phone_element.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button onclick="id_details('${phone_element.slug}')" class="btn btn-primary">show details</button>
              </div>
            </div>
    `;

    card_container.appendChild(div);
  });
  stop_loading();
};

const search=()=>{
    const input_name=document.getElementById('field');
    const input_value=input_name.value;
    toggle_search();
    load_phone(input_value)
    // console.log(input_value);
        
}

const toggle_search=()=>{
const load_button=document.getElementById('loading');
load_button.classList.remove('hidden')
}
const stop_loading=()=>{
  const load_button=document.getElementById('loading');
  load_button.classList.add('hidden')

}

const id_details=async(id)=>{
  const id_details=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
const data=await id_details.json();
const phone_document=data.data;
// console.log(phone_document);
search_details(phone_document)


}

const search_details=(phone_document)=>{
const phone_name=document.getElementById('phn_name');
phone_name.innerText=phone_document.name;
const image_element=document.getElementById('img');
image_element.src=phone_document.image;
const storge=document.getElementById('storge_size');
storge.innerText=phone_document.mainFeatures.storage;
const display=document.getElementById('display_size');
display.innerText=phone_document.mainFeatures.displaySize;
const realse_date=document.getElementById('realse');
realse_date.innerText=phone_document.mainFeatures.chipSet;


console.log(phone_document);
  
  my_modal_5.showModal()
  
}