const GLOBAL = {
    state: {
        vigencia: null,
        vigencias: [],
        //usuario: null,
        //usuarios: [],
        //publico:null,
        //publicos:[]
    },
    firestore: {},
};
function IniCredential() {
    //Lee la información del form,ulario de ingreso en index.html
    const email = document.getElementById("inEmail").value
    const password = document.getElementById("inPass").value
    //Evoca la función global de ingreso, en archivo (cinfirdata.js) 
    GLOBAL.firestore.CredentialIn(email, password)

}
function SignOut() {
    location.href = "/index.html"
    GLOBAL.firestore.CredentialOut()
}
function autenticar() {
    const modal = new bootstrap.Modal(document.getElementById('myModal'));
    const texto = document.getElementById("textoModal")
    modal.show();
    const btn = document.getElementById('btnConfirm')
    btn.onclick = () => IniCredential()
}

let byE = (elemento) => {
    const el = document.getElementById(elemento)
    return el
}
let newE = (elemento,id,clase,ancho) => {
    const el = document.createElement(elemento)
    el.id=id
    el.className=clase
    el.style.width=ancho
    return el
}
function mensajes(text, color) {
    Toastify({
        text: text,
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: color,
            color: "white",
        },
        onClick: function () { } // Callback after click
    }).showToast();

}

let template_caso=
    {
        "nmenores": 0,
        "clsLugares": [],
        "nhombres": 0,
        "clsDesplazamiento": [],
        "macrotipo": "Sin determinar",
        "fechafuente": "",
        "clsTipos": [],
        "vigencia": 0,
        "detalle": "",
        "enlace": "",
        "clsAccJuridica": [],
        "clsActores": [],
        "macroregion": "",
        "nmujeres": 0,
        "clsPueblos": [],
        "departamento": "",
        "fuente": "",
        "fecha": "",
        "id": 0,
        "clsPersonas": [],
        "macroactor": "",
        "detalleLugar": "",
        "npersonas": 0
}