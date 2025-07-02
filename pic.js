        const images = [
            'https://raw.githubusercontent.com/kons10/mypic_private/refs/heads/main/1.png?token=GHSAT0AAAAAADGUFOLQEGH6WO47R4DQT55Q2DEVAUA',
            'https://raw.githubusercontent.com/kons10/mypic_private/refs/heads/main/2.png?token=GHSAT0AAAAAADGUFOLQ3BIB73AXZPTLF3OU2DEU77Q'
        ];
        
        let currentIndex = 0;
        
        function changeBackground() {
            document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
            currentIndex = (currentIndex + 1) % images.length;
        }
        
        // 初期設定
        changeBackground();
        
        // 6秒ごとに切り替え
        setInterval(changeBackground, 6000);
