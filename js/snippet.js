gun.get("user").get(userpub).get("orders").get("amounts").on(v => {
    $("#computerScore").html(v.orderNumbers)
})

function toTrue(){
getUserPub = $("#")
var getOrders = gun.get("user").get(userPub).get("orders").get("amounts").set({
    order: true,
    amounts: 1,
})

getOrders.on(v => {
    $("#computerScore").html(v.orderNumbers)

})
$("#sign").hide()
$("#infoConf").show()
$("#price").hide()
$("#checkout").hide()
$("#banner").show()





}