
(function(){
  function $(id){return document.getElementById(id)}
  var form = $("contactForm");
  if(!form) return;
  form.addEventListener('submit', function(evt){
    evt.preventDefault();
    var name = $("name").value.trim();
    var email = $("email").value.trim();
    var message = $("message").value.trim();
    var updates = $("updates").checked;
    var feedback = $("formFeedback");
    if(!name || !email || !message){
      feedback.textContent = 'Please complete all required fields.';
      feedback.style.color = 'crimson';
      return;
    }
    var entry = {name:name,email:email,message:message,updates:updates,date:new Date().toISOString()};
    var stored = JSON.parse(localStorage.getItem('nh_submissions')||'[]');
    stored.push(entry);
    localStorage.setItem('nh_submissions', JSON.stringify(stored));
    feedback.style.color = 'green';
    feedback.textContent = 'Thanks, ' + name + '! Your message has been saved (demo). We will contact you at ' + email + '.';
    form.reset();
    feedback.setAttribute('tabindex','-1'); feedback.focus();
  });
})();
