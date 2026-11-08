// Edite este arquivo para configurar os canais comerciais e os perfis da equipe.
const CONFIG = {
  whatsapp: "5581998765432", // Apenas dígitos com DDI e DDD. Ex.: 5581999999999
  email: "", // Ex.: contato@seudominio.com.br
  profissionais: [
    { nome: "Thalinês", cargo: "", formacao: "", bio: "", foto: "" },
    { nome: "Viviane", cargo: "", formacao: "", bio: "", foto: "" },
    { nome: "Lucas", cargo: "", formacao: "", bio: "", foto: "" }
  ]
};
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false');
  }));
}
const year = document.querySelector('#year'); if(year) year.textContent = new Date().getFullYear();
const teamGrid = document.querySelector('#team-grid');
if(teamGrid && CONFIG.profissionais.length) {
  document.querySelector('#team-empty')?.remove();
  CONFIG.profissionais.forEach(pro => {
    const card = document.createElement('article'); card.className = 'team-card';
    if(pro.foto) {const img = document.createElement('img');img.src=pro.foto;img.alt='Foto de '+(pro.nome||'profissional');img.loading='lazy';card.append(img)}
    const h = document.createElement('h3'); h.textContent=pro.nome||'Profissional';card.append(h);
    if(pro.cargo) {const role=document.createElement('div');role.className='team-role';role.textContent=pro.cargo;card.append(role)}
    const descricao=[pro.formacao,pro.bio].filter(Boolean).join(' · ');
    if(descricao) {const bio=document.createElement('p');bio.textContent=descricao;card.append(bio)}
    teamGrid.append(card);
  });
}
const phoneDisplay = document.querySelector('#phone-display');
if(phoneDisplay && CONFIG.whatsapp) phoneDisplay.textContent = '+'+CONFIG.whatsapp;
const emailDisplay = document.querySelector('#email-display');
if(emailDisplay && CONFIG.email) emailDisplay.textContent = CONFIG.email;
const subject = new URLSearchParams(location.search).get('assunto');
const subjectSelect = document.querySelector('#assunto');
if(subjectSelect && subject) {
 const normalized = subject.toLowerCase();
 const option = [...subjectSelect.options].find(o => o.value.toLowerCase() === normalized || (normalized.includes('prestador') && o.value === 'Prestação de serviços'));
 if(option) subjectSelect.value=option.value;
}
const form = document.querySelector('#contact-form');
if(form) form.addEventListener('submit', e => {
  e.preventDefault();if(!form.reportValidity())return;
  const f = new FormData(form);
  const msg = `Olá, Tríade Contabilidade!\n\nNome: ${f.get('nome')}\nContato: ${f.get('contato')}\nAssunto: ${f.get('assunto')||'Não informado'}\nMensagem: ${f.get('mensagem')}`;
  const result=document.querySelector('#form-result');result.hidden=false;result.replaceChildren();
  const p=document.createElement('p');p.textContent='Sua mensagem está pronta. Revise e copie o texto para enviar pelo canal de atendimento.';result.append(p);
  const textarea=document.createElement('textarea');textarea.value=msg;textarea.rows=7;textarea.readOnly=true;textarea.setAttribute('aria-label','Mensagem preparada');result.append(textarea);
  const copy=document.createElement('button');copy.type='button';copy.textContent='Copiar mensagem';copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(msg);copy.textContent='Mensagem copiada'}catch{textarea.select();copy.textContent='Selecione e copie a mensagem'}});result.append(copy);
  if(CONFIG.whatsapp){const a=document.createElement('a');a.href='https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(msg);a.target='_blank';a.rel='noopener noreferrer';a.textContent='Abrir no WhatsApp ↗';result.append(a)}
  if(CONFIG.email){const a=document.createElement('a');a.href='mailto:'+CONFIG.email+'?subject='+encodeURIComponent('Contato pelo site Tríade')+'&body='+encodeURIComponent(msg);a.textContent='Abrir no e-mail ↗';a.style.marginLeft='16px';result.append(a)}
  result.scrollIntoView({behavior:'smooth',block:'nearest'});
});

// Botão flutuante disponível em todas as páginas.
const whatsappMessage = 'Olá, equipe Tríade Contabilidade. Acessei o site e gostaria de conhecer as soluções contábeis para o meu negócio. Poderiam me orientar sobre os serviços e as próximas etapas do atendimento?';
const whatsappFloat = document.createElement('a');
whatsappFloat.className = 'whatsapp-float';
const whatsappNumber = CONFIG.whatsapp.replace(/\D/g, '');
whatsappFloat.href = whatsappNumber
  ? 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(whatsappMessage)
  : 'https://api.whatsapp.com/send?text=' + encodeURIComponent(whatsappMessage);
whatsappFloat.target = '_blank';
whatsappFloat.rel = 'noopener noreferrer';
whatsappFloat.setAttribute('aria-label', 'Fale com a Tríade pelo WhatsApp (abre em nova aba)');
whatsappFloat.innerHTML = '<span class="whatsapp-float-label">Fale com nossa equipe</span><svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 .8A15.1 15.1 0 0 0 3 23.6L.9 31.2l7.8-2A15.2 15.2 0 1 0 16 .8Zm0 27.7a12.5 12.5 0 0 1-6.4-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A12.6 12.6 0 1 1 16 28.5Zm6.9-9.4c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.2-2.8c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5s-1.3 1.3-1.3 3.1 1.4 3.5 1.6 3.7c.2.3 2.7 4.1 6.5 5.8.9.4 1.6.6 2.2.8.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5Z"/></svg>';
document.body.append(whatsappFloat);
