

var key1 = document.getElementById('k1')
var key2 = document.getElementById('k2')
var key3 = document.getElementById('k3')
var key4 = document.getElementById('k4')
var key5 = document.getElementById('k5')
var key6 = document.getElementById('k6')
var key7 = document.getElementById('k7')
var key8 = document.getElementById('k8')
var key9 = document.getElementById('k9')

document.body.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === "a") {
        var boom = document.getElementById("boom")
        boom.play()
        key1.classList.remove('org')
        key1.classList.add('cir')

    }
    if (e.key === "s") {
        var hihat = document.getElementById("hihat")
        hihat.play()
        key2.classList.remove('org')
        key2.classList.add('cir')
    }
    if (e.key === "d") {
        var ride = document.getElementById("ride")
        ride.play()
        key3.classList.remove('org')
        key3.classList.add('cir')
    }
    if (e.key === "f") {
        var openhat = document.getElementById("openhat")
        openhat.play()
        key4.classList.remove('org')
        key4.classList.add('cir')
    }
    if (e.key === "g") {
        var clap = document.getElementById("clap")
        clap.play()
        key5.classList.remove('org')
        key5.classList.add('cir')
    }
    if (e.key === "h") {
        var kick = document.getElementById("kick")
        kick.play()
        key6.classList.remove('org')
        key6.classList.add('cir')
    }
    if (e.key === "j") {
        var snare = document.getElementById("snare")
        snare.play()
        key7.classList.remove('org')
        key7.classList.add('cir')
        
    }
    if (e.key === "k") {
        var tink = document.getElementById("tink")
        tink.play()
        key8.classList.remove('org')
        key8.classList.add('cir')
    }
    if (e.key === "l") {
        var tom = document.getElementById("tom")
        tom.play()
        key9.classList.remove('org')
        key9.classList.add('cir')
    }

})
document.body.addEventListener('keyup', function (e) {
    console.log(e.key);
    if (e.key === "a") {
        key1.classList.remove('cir')
        key1.classList.add('org')

    }
    if (e.key === "s") {
        key2.classList.remove('cir')
        key2.classList.add('org')

    }
    if (e.key === "d") {
        key3.classList.remove('cir')
        key3.classList.add('org')

    }
    if (e.key === "f") {
        key4.classList.remove('cir')
        key4.classList.add('org')

    }
    if (e.key === "g") {
        key5.classList.remove('cir')
        key5.classList.add('org')

    }
    if (e.key === "h") {
        key6.classList.remove('cir')
        key6.classList.add('org')

    }
    if (e.key === "j") {
        key7.classList.remove('cir')
        key7.classList.add('org')

    }
    if (e.key === "k") {
        key8.classList.remove('cir')
        key8.classList.add('org')

    }
    if (e.key === "l") {
        key9.classList.remove('cir')
        key9.classList.add('org')

    }

});
