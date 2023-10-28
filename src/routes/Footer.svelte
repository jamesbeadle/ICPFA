<style>
  .footer {
    background-color: #2c2c2c;
    padding: 20px 40px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-left {
    display: flex;
    align-items: center;
}

.footer-left > * {
    margin-right: 20px; 
}

.footer-right {
    display: flex;
    align-items: center;
}

.footer-logo {
    width: 100px; 
}

.juno-logo {
    margin-left: 10px; 
}

.icon {
    width: 24px; 
    height: 24px;
    margin-right: 10px; 
}

@media (max-width: 768px) {
    .footer {
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .footer-left, .footer-right {
        margin-bottom: 10px;
    }

    .footer-right span {
        font-size: 12px;
    }

    .icon {
        width: 18px;
        height: 18px;
    }
}

</style>

<footer class="footer w-full py-4">
  <div class="footer-left">
      <a href="/"><img src="logo.png" alt="Logo" class="footer-logo"></a>
      <a target="_blank" class="icon" href="https://twitter.com/OpenFPL_DAO"><img src="twitter.png" alt="Twitter Icon"></a>
      <a target="_blank" class="icon" href="https://oc.app/community/jpibo-3yaaa-aaaar-au7hq-cai/channel/182526718610465230108426284010821007369/?ref=zv6hh-xaaaa-aaaar-ac35q-cai"><img src="openchat.png" alt="OpenChat Icon"></a>      
  </div>

  <div class="footer-right">
      <span class="text-white">Powered by Juno</span>
      <a target="_blank" class="icon" href="https://juno.build"><img src="juno.png" alt="Juno Logo" class="juno-logo icon"></a>      
  </div>
</footer>
