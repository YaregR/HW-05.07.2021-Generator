const planetInfo = document.querySelector(".planetInfo");

const divEl = (data) => {
    let list = [];
    for(el of data){
        const html = `<div>${el}</div>`;
        list.push(html);
    };
    planetInfo.innerHTML = list;
};

const formEl = document.forms.planets;
formEl.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const { data } = await axios.post('/form', formData);
    // console.log('ответ сервера:', data);
    divEl(data);
});