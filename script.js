// setInterval() is a function which take 2 arguments. First is the function that you want to call after every certain interval of time and the second argument is the time interval in miliseconds
setInterval(() => {
    let now = new Date();
    let hrs = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // defining rotations

    let h_hand = document.getElementById('hour');
    let m_hand = document.getElementById('min');
    let s_hand = document.getElementById('sec');

    let h_rotation = 30*(hrs)+0.5*(min)+0.0084*(sec);
    let m_rotation = 6*(min)+0.1*(sec);
    let s_rotation = 6*(sec);
    // These formulae can be derived using unitary method

    // Rotating clock hands
    h_hand.style.transform = `rotate(${h_rotation}deg)`;
    m_hand.style.transform = `rotate(${m_rotation}deg)`;
    s_hand.style.transform = `rotate(${s_rotation}deg)`;
}, 1000);