// Inline SVG icons keep controls consistent across iOS, Android and desktop.
const iconPaths={"arrow-ne":"M5 19 19 5M5 5h14v14","arrow-se":"M5 5l14 14M5 19h14V5","arrow-left":"M19 12H5m7-7-7 7 7 7","arrow-right":"M5 12h14m-7-7 7 7-7 7","arrow-up":"M12 19V5m-7 7 7-7 7 7","arrow-down":"M12 5v14m-7-7 7 7 7-7","heart":"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z","menu":"M4 6h16M4 12h16M4 18h16","close":"m6 6 12 12M6 18 18 6","pause":"M8 5v14M16 5v14","play":"m8 5 11 7-11 7Z"};
function icon(name){return `<svg class="icon icon-${name}" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="${iconPaths[name]}"/></svg>`;}
const categories = {weave:'Вязка и плетение',sculpture:'Застывшее движение',mineral:'Минеральная драматургия',texture:'Тихая фактура',botanic:'Новая ботаника',fluid:'Жидкий цвет',light:'Свет и глубина',fresco:'Арт-фрески',shadow:'Свет и тень',optical:'Оптические иллюзии'};
const descriptions = {mineral:'Геологический рисунок с характером. Крупные прожилки, неожиданные сочетания оттенков и ощущение природного масштаба.',texture:'Спокойная палитра и тактильная выразительность. Образ, который раскрывается в боковом свете и создаёт глубину без визуального шума.',botanic:'Природа как художественный жест. Выразительные силуэты, сложный цвет и масштаб, который превращает стену в самостоятельную композицию.',fluid:'Движение цвета, текучие границы и многослойность. Для акцентной поверхности, которая становится эмоциональным центром интерьера.',light:'Свет как часть композиции. Прозрачные и полупрозрачные слои, глубина изображения и выразительный силуэт арт-объекта.',fresco:'Живописный образ в архитектурном масштабе. Ритм, воздух и композиция, адаптированные под стену, мебель и точки обзора.'};
descriptions.shadow='Растительная графика, архитектурные силуэты и отражённый свет. Выразительные тени соединяют ритм орнамента с фактурой поверхности.';
descriptions.optical='Игра перспективы, ритма и тональных переходов. Рисунок создаёт ощущение глубины и меняет восприятие плоскости.';
descriptions.weave='Крупная вязка, деревянное плетение и выразительные орнаменты. Образы, в которых мягкость нити встречается с архитектурным масштабом.';
descriptions.sculpture='Белый рельеф, текучие складки, лепестки и пластика движения. От лёгкого акцента до объёмного орнамента на всю стену. Пропорции и ритм адаптируем к вашему пространству.';
const resolveAsset=path=>window.VITRUK_ASSETS?.[path]||path;
const art = [
 ["a96", "Полуночная вязка", "weave", "96-midnight-wool.webp"],
 ["a99", "Пион в движении", "sculpture", "99-white-peony.webp"],
 ["a102", "Лазуритовая ночь", "mineral", "102-lazurite-night.webp"],
 ["a105", "Угольное плиссе", "texture", "105-charcoal-pleats.webp"],
 ["a108", "Медный лотос", "botanic", "108-copper-lotus.webp"],
 ["a111", "Медный прилив", "fluid", "111-petrol-copper-current.webp"],
 ["a114", "Опаловый свет", "light", "114-opal-glass.webp"],
 ["a117", "Северные сосны", "fresco", "117-northern-pines.webp"],
 ["a120", "Тень глицинии", "shadow", "120-wisteria-window.webp"],
 ["a123", "Графитовый портал", "optical", "123-black-folded-portal.webp"],
 ["a97", "Берёзовый переплёт", "weave", "97-birch-weave.webp"],
 ["a100", "Перламутровый веер", "sculpture", "100-shell-fanfare.webp"],
 ["a103", "Фисташковая брекчия", "mineral", "103-pistachio-breccia.webp"],
 ["a106", "Слои дюны", "texture", "106-dune-strata.webp"],
 ["a109", "Сливовая магнолия", "botanic", "109-plum-magnolia.webp"],
 ["a112", "Киноварь и молоко", "fluid", "112-cinnabar-milk.webp"],
 ["a115", "Янтарные каннелюры", "light", "115-amber-flutes.webp"],
 ["a118", "Охристый хребет", "fresco", "118-ochre-ridge.webp"],
 ["a121", "Сад под перголой", "shadow", "121-pergola-garden.webp"],
 ["a124", "Белая перспектива", "optical", "124-ivory-perspective.webp"],
 ["a98", "Терракотовый узел", "weave", "98-terracotta-knot.webp"],
 ["a101", "Ленты ветра", "sculpture", "101-wind-ribbons.webp"],
 ["a104", "Дымчатая роза", "mineral", "104-smoked-rose-stone.webp"],
 ["a107", "Серебряный лён", "texture", "107-silver-linen.webp"],
 ["a110", "Нефритовый гербарий", "botanic", "110-jade-fern.webp"],
 ["a113", "Кобальтовый шёлк", "fluid", "113-cobalt-pearl.webp"],
 ["a116", "Ледяная глубина", "light", "116-glacier-depth.webp"],
 ["a119", "Тростник у воды", "fresco", "119-moonwater-reeds.webp"],
 ["a122", "Орешник в полдень", "shadow", "122-hazel-canopy.webp"],
 ["a125", "Бронзовые орбиты", "optical", "125-bronze-orbits.webp"],
 ["a94", "Обсидиановые своды", "optical", "94-obsidian-vaults.webp"],
 ["a95", "Умбровая анфилада", "optical", "95-umber-arcades.webp"],
 ["a91", "Бесконечный свод", "optical", "91-gothic-perspective.webp"],
 ["a92", "Гипсовая готика", "sculpture", "92-gothic-plaster.webp"],
 ["a93", "Тени стрельчатых окон", "shadow", "93-gothic-shadow.webp"],
 ["a70", "Восходящие арки", "sculpture", "70-ascending-arcs.webp"],
 ["a82", "Арки · полный ритм", "sculpture", "70-ascending-arcs-dense.webp"],
 ["a71", "Складка света", "sculpture", "71-fold-of-light.webp"],
 ["a83", "Складка света · поток", "sculpture", "71-fold-of-light-dense.webp"],
 ["a72", "Дыхание каллы", "sculpture", "72-calla-breath.webp"],
 ["a84", "Каллы · цветущий сад", "sculpture", "72-calla-breath-dense.webp"],
 ["a73", "Белый каскад", "sculpture", "73-white-cascade.webp"],
 ["a85", "Белый каскад · размах", "sculpture", "73-white-cascade-dense.webp"],
 ["a75", "Орбита лепестков", "sculpture", "75-petal-orbit.webp"],
 ["a87", "Лепестки · полный ритм", "sculpture", "75-petal-orbit-dense.webp"],
 ["a76", "Парус из гипса", "sculpture", "76-ivory-sail.webp"],
 ["a88", "Парус · полный ветер", "sculpture", "76-ivory-sail-dense.webp"],
 ["a77", "Тихая муза", "sculpture", "77-silent-muse.webp"],
 ["a89", "Муза · цветение", "sculpture", "77-silent-muse-dense.webp"],
 ["a78", "Рассвет ириса", "sculpture", "78-iris-dawn.webp"],
 ["a90", "Ирисы · цветущий сад", "sculpture", "78-iris-dawn-dense.webp"],
 ["a86", "Остановленный танец", "sculpture", "74-frozen-dance-dense.webp"],
 ["a79", "Пауза гравитации", "sculpture", "79-gravity-pause.webp"],
 ["a80", "Меловой веер", "sculpture", "80-limestone-fan.webp"],
 ["a81", "Память шёлка", "sculpture", "81-memory-of-silk.webp"],
 ["a58", "Шерстяные косы", "weave", "58-ivory-cables.webp"],
 ["a59", "Жемчужные петли", "weave", "59-pearl-loops.webp"],
 ["a60", "Винная нить", "weave", "60-wine-braid.webp"],
 ["a61", "Шалфейный стежок", "weave", "61-sage-stitch.webp"],
 ["a62", "Косы из ясеня", "weave", "62-ash-braid.webp"],
 ["a63", "Ореховый уток", "weave", "63-walnut-weft.webp"],
 ["a64", "Графитовая ёлка", "weave", "64-charcoal-chevron.webp"],
 ["a65", "Кленовая петля", "weave", "65-maple-loop.webp"],
 ["a66", "Льняная решётка", "weave", "66-linen-lattice.webp"],
 ["a67", "Шерсть и дуб", "weave", "67-wool-and-oak.webp"],
 ["a68", "Серебряный жаккард", "weave", "68-silver-jacquard.webp"],
 ["a69", "Песчаная вязь", "weave", "69-sand-interlace-v2.webp"],
 ["a55", "Белый гербарий", "botanic", "55-white-herbarium-relief.webp"],
 ["a56", "Тёплая складка", "texture", "56-warm-fold-relief.webp"],
 ["a57", "Песчаные лепестки", "botanic", "57-sand-petals-relief.webp"],
 ["a53", "Сад напротив", "shadow", "53-garden-facing-window.webp"],
 ["a54", "Тайный двор", "shadow", "54-secret-courtyard.webp"],
 ["a29", "Зелёный разлом", "mineral", "29-verde-fault.webp"],
 ["a32", "Меловой прилив", "texture", "32-chalk-tide.webp"],
 ["a35", "Магнолия тушью", "botanic", "35-magnolia-ink.webp"],
 ["a38", "Нефтяной жест", "fluid", "38-petrol-gesture.webp"],
 ["a41", "Медовый горизонт", "light", "41-honey-horizon.webp"],
 ["a44", "Тосканская даль", "fresco", "44-tuscan-distance.webp"],
 ["a47", "Бамбуковый час", "shadow", "47-bamboo-hours.webp"],
 ["a50", "Смещённый горизонт", "optical", "50-shifted-horizon.webp"],
 ["a30", "Розовый кварц", "mineral", "30-rose-quartz.webp"],
 ["a33", "Медная земля", "texture", "33-copper-earth.webp"],
 ["a36", "Эвкалиптовый туман", "botanic", "36-eucalyptus-mist.webp"],
 ["a39", "Гранатовая вуаль", "fluid", "39-garnet-veil.webp"],
 ["a42", "Сад за стеклом", "light", "42-frosted-garden.webp"],
 ["a45", "Приливные острова", "fresco", "45-tidal-islands.webp"],
 ["a48", "Силуэт инжира", "shadow", "48-fig-silhouette.webp"],
 ["a51", "Тихая волна", "optical", "51-silent-wave.webp"],
 ["a31", "Синие пласты", "mineral", "31-blue-strata.webp"],
 ["a34", "Шёлковый известняк", "texture", "34-silk-limestone.webp"],
 ["a37", "Дикий ажур", "botanic", "37-wild-umbels.webp"],
 ["a40", "Перламутровый дрейф", "fluid", "40-pearl-drift.webp"],
 ["a43", "Дымчатое сияние", "light", "43-smoky-aurora.webp"],
 ["a46", "Зимний тростник", "fresco", "46-winter-reeds.webp"],
 ["a49", "Ивовый свет", "shadow", "49-willow-light.webp"],
 ["a52", "Внутренняя орбита", "optical", "52-inner-orbit.webp"],
 ["a23", "Оливковый полдень", "shadow", "23-olive-afternoon.webp"],
 ["a24", "Ажур утра", "shadow", "24-acacia-morning.webp"],
 ["a25", "Ритм папоротника", "botanic", "25-fern-rhythm.webp"],
 ["a26", "Серебряные семена", "botanic", "26-silver-seeds.webp"],
 ["a27", "Лунная перспектива", "optical", "27-lunar-perspective.webp"],
 ["a28", "Каменная лента", "optical", "28-stone-ribbon.webp"],
 ["a13", "Тень гинкго", "shadow", "01-ginkgo-shadow.webp"],
 ["a14", "Сосновый ноктюрн", "shadow", "02-pine-nocturne.webp"],
 ["a15", "Отражение тростника", "shadow", "03-reed-reflection.webp"],
 ["a16", "Двойной гербарий", "shadow", "04-leaf-double-shadow.webp"],
 ["a17", "Бронзовый сад", "botanic", "05-ginkgo-bronze.webp"],
 ["a18", "Фарфоровый папоротник", "botanic", "06-fern-porcelain.webp"],
 ["a19", "Полуночная ботаника", "botanic", "07-midnight-botanic.webp"],
 ["a20", "Складки горизонта", "optical", "08-folded-horizon.webp"],
 ["a21", "Эхо арок", "optical", "09-echo-arches.webp"],
 ["a22", "Шёлковый муар", "optical", "10-moire-silk.webp"],
 ['a01','Тектоника','mineral','hero.webp'],['a02','Тихий гербарий','botanic','botanic.webp'],['a03','Память земли','texture','relief.webp'],['a04','Глубокое течение','fluid','fluid.webp'],['a05','Янтарный свет','light','light.webp'],['a06','Дальний берег','fresco','fresco.webp'],['a07','Лесная графика','fresco','wood.webp'],['a08','Кобальтовый жест','fluid','ceramic.webp'],['a09','Серебряный разлом','mineral','mineral-silver.webp'],['a10','След времени','texture','texture-limestone.webp'],['a11','Сумеречный сад','botanic','botanic-burgundy.webp'],['a12','Дымчатый горизонт','light','light-smoke.webp']
].map(([id,title,category,file])=>({id,title,category,image:resolveAsset('assets/'+file)}));
let favorites=new Set();try{const saved=JSON.parse(localStorage.getItem('vitruk-favorites')||'[]');if(Array.isArray(saved))favorites=new Set(saved.filter(id=>art.some(a=>a.id===id)));}catch{}
let filter='all',limit=art.length,current=0,dialogItems=art;
const gallery=document.querySelector('#gallery'),dialog=document.querySelector('#art-dialog');
const escapeHTML=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function filtered(){return art.filter(a=>filter==='all'||(filter==='favorites'?favorites.has(a.id):a.category===filter));}
function render(){const items=filtered();const shown=items.slice(0,limit);gallery.innerHTML=shown.map(a=>`<article class="card"><div class="card-image"><button class="art-open" data-open="${a.id}" aria-label="Рассмотреть образ ${a.title}"><img src="${a.image}" alt="${a.title} — ${categories[a.category]}" loading="lazy" width="800" height="600"></button><button class="save-art" data-save="${a.id}" aria-label="${favorites.has(a.id)?'Убрать из избранного':'Сохранить'}: ${a.title}" aria-pressed="${favorites.has(a.id)}">${icon('heart')}</button></div><div class="card-info"><div><h3>${a.title}</h3><p>${categories[a.category]}</p></div><button data-open="${a.id}" aria-label="Открыть ${a.title}">${icon('arrow-ne')}</button></div></article>`).join('');document.querySelector('#more').hidden=shown.length>=items.length;document.querySelector('#empty-gallery').hidden=items.length>0;document.querySelector('#gallery-count').textContent=`${String(shown.length).padStart(2,'0')} / ${String(items.length).padStart(2,'0')} образов`;updateCounts();}
function updateCounts(){document.querySelector('#fav-count').textContent=favorites.size;document.querySelector('#selected-brief').textContent=favorites.size?'В вашем выборе: '+art.filter(a=>favorites.has(a.id)).map(a=>a.title).join(', '):'Можно добавить образы из коллекции';}
let toastTimer;function toast(text){const el=document.querySelector('.toast');el.textContent=text;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),2600);}
function save(id){if(favorites.has(id)){favorites.delete(id);toast('Образ убран из избранного');}else{favorites.add(id);toast('Образ добавлен к вашей идее');}try{localStorage.setItem('vitruk-favorites',JSON.stringify([...favorites]));}catch{}render();if(dialog.open)updateDialogFavorite();}
function updateDialogFavorite(){const a=dialogItems[current],saved=favorites.has(a.id);const b=document.querySelector('#dialog-favorite');b.innerHTML=icon('heart')+'<span>'+(saved?'Образ сохранён':'Сохранить образ')+'</span>';b.setAttribute('aria-pressed',saved);}
function showArt(id){dialogItems=filtered();current=dialogItems.findIndex(a=>a.id===id);if(current<0){dialogItems=art;current=art.findIndex(a=>a.id===id);}fillDialog();dialog.showModal();}
function fillDialog(){const a=dialogItems[current];document.querySelector('#dialog-image').src=a.image;document.querySelector('#dialog-image').alt=a.title+' — '+categories[a.category];document.querySelector('#dialog-title').textContent=a.title;document.querySelector('#dialog-type').textContent=categories[a.category];document.querySelector('#dialog-description').textContent=descriptions[a.category];document.querySelector('#dialog-source').textContent='Интерьерная визуализация. Образ адаптируется к вашему пространству и выбранному материалу.';document.querySelector('#dialog-number').textContent=`${current+1} / ${dialogItems.length}`;updateDialogFavorite();}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;limit=art.length;document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',x===b);});render();}));
gallery.addEventListener('click',e=>{const open=e.target.closest('[data-open]'),saveButton=e.target.closest('[data-save]');if(open)showArt(open.dataset.open);if(saveButton){const id=saveButton.dataset.save;save(id);gallery.querySelector(`[data-save="${id}"]`)?.focus({preventScroll:true});}});
document.querySelector('#more').addEventListener('click',()=>{limit+=8;render();});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
function step(n){current=(current+n+dialogItems.length)%dialogItems.length;fillDialog();}document.querySelector('#previous').addEventListener('click',()=>step(-1));document.querySelector('#next').addEventListener('click',()=>step(1));dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();step(-1);}if(e.key==='ArrowRight'){e.preventDefault();step(1);}});
document.querySelector('#dialog-favorite').addEventListener('click',()=>save(dialogItems[current].id));document.querySelector('#dialog-discuss').addEventListener('click',()=>{const a=dialogItems[current];if(!favorites.has(a.id))save(a.id);dialog.close();document.querySelector('#contact').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});document.querySelector('#idea').focus({preventScroll:true});});
const materialDetails=[...document.querySelectorAll('.material-list details')];materialDetails.forEach(d=>d.addEventListener('toggle',()=>{if(!d.open)return;materialDetails.forEach(other=>{if(other!==d)other.open=false;});const im=document.querySelector('#material-art');im.src=resolveAsset(`assets/${d.dataset.art}.webp`);im.alt='Иллюстрация идеи: '+d.querySelector('summary').textContent.replace(/[0-9+]/g,'').trim();}));
const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');menu.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',opened);menu.setAttribute('aria-label',opened?'Закрыть меню':'Открыть меню');menu.innerHTML=icon(opened?'close':'menu');});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Открыть меню');menu.innerHTML=icon('menu');}));
document.querySelector('#brief').addEventListener('submit',e=>{e.preventDefault();const chosen=art.filter(a=>favorites.has(a.id));const lines=['Ольга, здравствуйте! Хочу обсудить дизайн поверхности.','Пространство: '+document.querySelector('#room').value,'Материал: '+(document.querySelector('#base').value||'Выберем вместе')];const idea=document.querySelector('#idea').value.trim();if(idea)lines.push('Идея: '+idea);if(chosen.length)lines.push('Понравившиеся образы: '+chosen.map(a=>a.title+' ('+a.id+')').join(', '));window.open('https://t.me/UkiUn?text='+encodeURIComponent(lines.join('\n')),'_blank','noopener,noreferrer');});
render();

// Autoplay while the first screen is visible; only the pause button stops playback.
(()=>{
 const hero=document.querySelector('.hero'),stage=document.querySelector('#hero-carousel');
 const slides=[...document.querySelectorAll('.hero-slide')],dots=[...document.querySelectorAll('[data-slide]')];
 const names=['Тектоника','Лесное отражение','Сила жеста','Янтарный вечер','Тень кроны','Сосновый час'];
 const labels=['МИНЕРАЛЬНАЯ ДРАМАТУРГИЯ','ПАНОРАМНАЯ ФРЕСКА','ИСКУССТВО НА КЕРАМИКЕ','СВЕТ И ГЛУБИНА','БЕТОН И МЯГКИЕ ТЕНИ','ГРАФИКА ВЕЧЕРНЕГО СВЕТА'];
 const pause=document.querySelector('#hero-pause');
 let index=0,playing=true,inView=true,timer=null,request=0;
 function updatePlayback(){pause.innerHTML=icon(playing?'pause':'play');pause.setAttribute('aria-label',playing?'Приостановить слайд-шоу':'Запустить слайд-шоу');hero.dataset.playing=String(playing);}
 function schedule(){clearTimeout(timer);if(playing&&inView&&!document.hidden)timer=setTimeout(()=>show(index+1,false),3000);}
 async function show(next,manual=true){
   clearTimeout(timer);const ticket=++request;next=(next+slides.length)%slides.length;
   try{await slides[next].decode();}catch{if(!slides[next].complete||!slides[next].naturalWidth){schedule();return;}}
   if(ticket!==request)return;
   index=next;slides.forEach((slide,i)=>{slide.classList.toggle('is-active',i===index);slide.setAttribute('aria-hidden',String(i!==index));});
   dots.forEach((dot,i)=>dot.setAttribute('aria-current',String(i===index)));
   document.querySelector('#hero-slide-label').textContent=String(index+1).padStart(2,'0')+' / '+labels[index];
   document.querySelector('#hero-caption').textContent='«'+names[index]+'» · интерьерный образ';
   if(manual)document.querySelector('#hero-announcement').textContent=names[index]+', интерьер '+(index+1)+' из '+slides.length;
   schedule();
 }
 dots.forEach((dot,i)=>dot.addEventListener('click',()=>show(i)));
 document.querySelector('#hero-prev').addEventListener('click',()=>show(index-1));
 document.querySelector('#hero-next').addEventListener('click',()=>show(index+1));
 pause.addEventListener('click',()=>{playing=!playing;updatePlayback();schedule();});
 hero.addEventListener('keydown',e=>{if(e.target.closest('.hero-controls')&&(e.key==='ArrowLeft'||e.key==='ArrowRight')){e.preventDefault();show(index+(e.key==='ArrowLeft'?-1:1));}});
 document.addEventListener('visibilitychange',schedule);
 if('IntersectionObserver' in window)new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;schedule();},{threshold:0}).observe(hero);
 let touch=null;stage.addEventListener('touchstart',e=>{if(e.touches.length===1)touch={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
 stage.addEventListener('touchend',e=>{if(!touch)return;const dx=e.changedTouches[0].clientX-touch.x,dy=e.changedTouches[0].clientY-touch.y;touch=null;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.5)show(index+(dx<0?1:-1));},{passive:true});
 stage.addEventListener('touchcancel',()=>{touch=null;});
 updatePlayback();schedule();
})();
