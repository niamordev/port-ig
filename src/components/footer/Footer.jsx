import React from 'react'

export default function Footer() {

  function handleCopyEmail() {
    var copyText = document.getElementById("myEmail");
    navigator.clipboard.writeText(copyText.textContent);
    copyText.style.color = "#b6beca";
    setTimeout(() => {
      copyText.style.color = "#a3b8ef";
    }, 600);
  }


  return (
    <footer>
            <p>Powered using <span className='blue-text'>React</span>.</p>
            <p>E-mail: <span onClick={() => handleCopyEmail()} className='blue-text' id='myEmail'>niamor.development@proton.me</span></p>
        <div className="copyrights">
            <p>Copyright © 2021-2022 <span className='blue-text'>Niamor Development</span>. All Rights Reserved.</p>
        </div>
    </footer>
  )
}
