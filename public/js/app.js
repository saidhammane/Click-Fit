
/*let displayTextData = (data) => {
    let htmlTemplate = `<h3>${data}</h3>`;
    document.querySelector('#text-card').innerHTML = htmlTemplate;
};


*/
let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click', function(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.boredapi.com/api/activity', true);
    xhr.send();
    xhr.onload = () => {
        if(xhr.status === 200){
            let data = xhr.responseText;
            let mobile = JSON.parse(data)
            displayJSONData(mobile);
        }
    }
})

displayJSONData = (mobile) => {
    let htmlTemplate = '';
    htmlTemplate = `
                    <tbody>
                    <tr>
                        <td>Activity</td>
                        <td class="dataJson">${mobile.activity}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td class="dataJson">${mobile.type}</td>
                    </tr>
                    <tr>
                        <td>Participants</td>
                        <td class="dataJson">${mobile.participants}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td class="dataJson">${mobile.price}</td>
                    </tr>
                    <tr>
                        <td>Link </td>
                        <td class="dataJson">${mobile.link}</td>
                    </tr>
                    <tr>
                        <td>Key</td>
                        <td class="dataJson">${mobile.key}</td>
                    </tr>
                    <tr>
                        <td>Accessibility</td>
                        <td class="dataJson">${mobile.accessibility}</td>
                    </tr>
                    </tbody>
                    `;
                    
    document.querySelector('#json-card').innerHTML = htmlTemplate;
}

window.onload = function(){
    document.getElementById('json-btn').click();
}

var btnUpload = $("#upload_file"),
btnOuter = $(".button_outer");
btnUpload.on("change", function(e){
var ext = btnUpload.val().split('.').pop().toLowerCase();
if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
    $(".error_msg").text("Not an Image...");
} else {
    $(".error_msg").text("");
    btnOuter.addClass("file_uploading");
    setTimeout(function(){
    btnOuter.addClass("file_uploaded");
},3000);
var uploadedFile = URL.createObjectURL(e.target.files[0]);
setTimeout(function(){
    $("#uploaded_view").append('<img src="'+uploadedFile+'" />').addClass("show");
        },3500);
    }
});
$(".file_remove").on("click", function(e){
    $("#uploaded_view").removeClass("show");
    $("#uploaded_view").find("img").remove();
    btnOuter.removeClass("file_uploading");
    btnOuter.removeClass("file_uploaded");
});

