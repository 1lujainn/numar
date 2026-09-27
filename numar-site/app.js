
var ASSET_EXT = {"a5968915e2dc9d4226caaf23e58ddd6a": ".svg", "3c0606b75d406b41552756526a17616f": ".png", "e5ea9b003387b544641daa7b325b2c80": ".svg", "ee39a5e70ec57c710bd47907b10ab890": ".svg", "4f4580a5f88d82b52e3c8f7ea5f4f962": ".jpg", "8ae530fbbb20f708a2f7412d43b8413a": ".png", "f322b4d83c4f3f090cea36a3c3cbe316": ".png", "53b5febf2ed658f9831b9865d91c418e": ".svg", "0780f3d0110fbc19f6a4bed151faa78b": ".svg", "3a7f8d5f2ecc35ef5f50bb8e20e002ef": ".png", "8f6dbfcb1d24eb75e68449ab04362d25": ".svg", "faf1c6cd7e9007c00a723f52e2e10968": ".png", "eb2211b23644be26b983e131fa2f0c74": ".png", "2b876b02ed03ffd8ee6d3c1221516cac": ".png", "207b9e8bb36185a999eb423ae03d09e3": ".svg", "34d7813a78eccfadc7fcdfe2f76fbb33": ".png", "11df153931db399fa96394fb18a51fdc": ".svg", "ac90f60afa24551134d31ae6fd5e0d78": ".png", "9ea6a884a7d7be5c65588f8cf8affee1": ".svg", "51adfde48f4b8bc0ae1c8c6185aa11b6": ".svg", "085557387a13aa142242d7fb7f70b49d": ".png", "d89589c927b80d024ba3de5aa937805f": ".svg", "5bc38b308904b42dd913236ece8f1041": ".jpg", "f7a616958713474792a72f88d72c1cab": ".svg", "41389901ec87d197c27ab565d42643a8": ".svg", "ea522640f29b140ac922002e89a6d4cc": ".svg", "3a6c4adca6b7858327bdf4d6d3b29c3b": ".svg", "3a464e4d82d097f0239fe9702f2d0ecf": ".png", "7cd5f7242f5cd00fa724010e0fea72ba": ".png", "a054cb949b7254ccd76d690a750109d7": ".png", "0e5d7dcf4ead63984c3ec74444de7c40": ".png", "ca37848d18f3925cfab380a19ca99c4d": ".png", "513489d47e0a67d54f9de7ff5c3579ee": ".svg", "2e5341b472091616015054a68b8b7e79": ".png", "ef0e7bc9967627b247df5cf617436909": ".png", "be8f0d3ef1103618f848e065f64be995": ".svg", "bc6e651bb799226a714c36d32ad23b7a": ".png", "8c7ad3275349f2090fd440e85e235c92": ".svg", "34ecd9fab526af0b9b9f8eb738d5c17b": ".png", "ca697f1ef2d534eae45f51849c5732fe": ".png", "ffb04e8bcef99674cf58d88ea1bdbfa2": ".png", "3adea8978170c2d626c6aa01965b6d48": ".svg"};
function blob(id){ return 'assets/' + id + (ASSET_EXT[id] || ''); }
class DCLogic { constructor(p){ this.props = p || {}; this.state = {}; }
  setState(o){ Object.assign(this.state, typeof o === 'function' ? o(this.state) : o); if (this.__up) this.__up(); } }
class Component extends DCLogic {
  constructor(p) {
    super(p);
    this.state = { rq: '', rcity: '', modal: false, walk: 1, walkAuto: true, page: 'home', menu: false, region: 'all', styleId: 'hijazi', ck: 'hijazi', step: 1, upload: null, over: false, an: 0, pct: 0, grow: false };
  }
  componentDidMount() { var self = this; this.wT = setInterval(function () { if (self.state.walkAuto && self.state.page === 'home') self.setState({ walk: self.state.walk % 3 + 1 }); }, 5500); }
  componentWillUnmount() { clearTimeout(this.dT); clearInterval(this.anT); clearInterval(this.pT); clearInterval(this.wT); clearInterval(this.nT); }
  top() {
    try { window.scrollTo(0, 0); } catch (e) {}
    try { var els = document.querySelectorAll('.nm-scroll'); for (var i = 0; i < els.length; i++) els[i].scrollTop = 0; } catch (e) {}
  }
  go(page, extra) {
    var s = Object.assign({ page: page, menu: false, modal: false }, extra || {});
    this.setState(s);
    if (!s.modal) this.top();
  }
  data() {
    var B = '/_blob/';
    return [
      { id: 'hijazi', name: 'الحجازي الساحلي', short: 'الحجاز', region: 'المنطقة الغربية', rk: 'w', place: 'جدة التاريخية', img: '', hero: '', pos: '60% 50%', tone: '#6E4A2E', meta: 'الحجر المنقبي · الجص · الرواشين', desc: 'واجهات رأسية من الحجر المنقبي المكسو بالجص، تتقدمها رواشين خشبية بارزة تمتد عبر الطوابق.', credit: 'بيوت البلد، جدة — Jpatokal · CC BY-SA 4.0', ready: true },
      { id: 'najdi', name: 'النجدي', short: 'نجد', region: 'المنطقة الوسطى', rk: 'c', place: 'قصر سعد، الدرعية', img: '', pos: '50% 50%', tone: '#A87B4F', meta: 'الطين · الأثل · الحجر', desc: 'عمارة طينية بجدران سميكة ونوافذ صغيرة، تنتظم حول أفنية داخلية وتتوجها شرفات مسننة.', credit: 'قصر سعد، الدرعية — Heritage Commission · CC BY-SA 4.0' },
      { id: 'madinah', name: 'المدني', short: 'المدينة', region: 'المنطقة الغربية', rk: 'w', place: 'مبنى الترسيس، المدينة المنورة', img: '', pos: '50% 55%', tone: '#4A4744', meta: 'الحجر البازلتي · الخشب', desc: 'مبانٍ من الحجر البازلتي الداكن بنوافذ وأبواب خشبية، تعكس بيئة الحرّات المحيطة بالمدينة.', credit: 'المدينة المنورة — Heritage Commission · CC BY-SA 4.0' },
      { id: 'madrural', name: 'ريف المدينة', short: 'الريف', region: 'المنطقة الغربية', rk: 'w', place: 'البلدة القديمة، العُلا', img: '', pos: '50% 60%', tone: '#B5653E', meta: 'الطين · الحجر · جذوع النخل', desc: 'قرى متلاصقة من الطين والحجر في الواحات، تتجاور بيوتها وتضيق أزقتها طلباً للظل.', credit: 'العُلا — Sammy Six · CC BY 2.0' },
      { id: 'sarawat', name: 'السروات', short: 'السروات', region: 'المنطقة الجنوبية', rk: 's', place: 'بلجرشي القديمة، الباحة', img: '', pos: '50% 50%', tone: '#6F7466', meta: 'الحجر المرصوف · الخشب المنقوش', desc: 'بيوت حجرية متعددة الأدوار من الحجر المرصوف، بأعمدة وسقوف خشبية منقوشة.', credit: 'بلجرشي القديمة — Richard Mortel · CC BY 2.0' },
      { id: 'taif', name: 'الطائفي', short: 'الطائف', region: 'المنطقة الغربية', rk: 'w', place: 'قصر شبرا، الطائف', img: '', pos: '50% 50%', tone: '#A9674A', meta: 'الحجر · الجص · الرواشين', desc: 'مبانٍ من الحجر والجص بواجهات فاتحة ورواشين خشبية، تجمع أثر الحجاز وطبيعة المرتفعات.', credit: 'قصر شبرا، الطائف — Richard Mortel · CC BY 2.0' },
      { id: 'eastcoast', name: 'الساحلي الشرقي', short: 'الساحل', region: 'المنطقة الشرقية', rk: 'e', place: 'ميناء العقير', img: '', pos: '50% 40%', tone: '#5D7280', meta: 'الحجر البحري · الجص · الخشب', desc: 'مبانٍ ساحلية من الحجر البحري والجص، بأعمدة وتيجان خشبية ونوافذ للتهوية.', credit: 'العقير — O.Mustafin · CC0' },
      { id: 'eastnajdi', name: 'النجدي الشرقي', short: 'نجد', region: 'المنطقة الشرقية', rk: 'e', place: '—', img: '', pos: '', tone: '#9C7A55', meta: 'الطين · الجص', desc: 'امتداد للعمارة الطينية النجدية بسمات محلية، في بيئة أكثر انفتاحاً على الساحل.', credit: '—' },
      { id: 'ahsa', name: 'واحات الأحساء', short: 'الأحساء', region: 'المنطقة الشرقية', rk: 'e', place: 'قصر صاهود، المبرز', img: '', pos: '50% 55%', tone: '#6B6A48', meta: 'الطين · الجص · الأقواس', desc: 'عمارة الواحة من الطين والجص، بأقواس وأروقة ومبانٍ محصّنة بين النخيل.', credit: 'قصر صاهود — saudipics · CC BY-SA 4.0' },
      { id: 'qatif', name: 'القطيفي', short: 'القطيف', region: 'المنطقة الشرقية', rk: 'e', place: 'قلعة تاروت، القطيف', img: '', pos: '50% 55%', tone: '#7D8A86', meta: 'الحجر · الجص', desc: 'عمارة ساحلية وواحية من الحجر والجص، بقلاع وبيوت متلاصقة.', credit: 'قلعة تاروت — Mustafa Al-Elq · CC BY-SA 4.0' },
      { id: 'northnajdi', name: 'النجدي الشمالي', short: 'الشمال', region: 'المنطقة الشمالية', rk: 'n', place: '—', img: '', pos: '', tone: '#8E6A4A', meta: 'الطين · الحجر', desc: 'عمارة طينية وحجرية بأبراج وأسوار، تتكيف مع مناخ الشمال.', credit: '—' },
      { id: 'tabuk', name: 'ساحل تبوك', short: 'تبوك', region: 'المنطقة الشمالية', rk: 'n', place: 'البلدة القديمة، الوجه', img: '', pos: '50% 45%', tone: '#52707A', meta: 'الحجر المرجاني · الجص · الرواشين', desc: 'بيوت ساحلية من الحجر المرجاني بواجهات جصية ورواشين خشبية.', credit: 'الوجه — Richard Mortel · CC BY 2.0' },
      { id: 'tihama', name: 'ساحل تهامة', short: 'تهامة', region: 'المنطقة الجنوبية', rk: 's', place: '—', img: '', pos: '', tone: '#9A8F6A', meta: 'القش · الطين · الخشب', desc: 'بيوت ساحلية خفيفة تتكيف مع الحرارة والرطوبة، تُبنى من القش والطين والخشب.', credit: '—' },
      { id: 'tihamaf', name: 'سفوح تهامة', short: 'السفوح', region: 'المنطقة الجنوبية', rk: 's', place: 'قرية ذي عين، الباحة', img: '', pos: '50% 55%', tone: '#7A6A58', meta: 'الحجر · الأسقف المسطحة', desc: 'قرى حجرية متدرجة على السفوح، تتراص بيوتها فوق الصخر.', credit: 'قرية ذي عين — Saracen Count · CC BY-SA 4.0' },
      { id: 'asdar', name: 'أصدار عسير', short: 'عسير', region: 'المنطقة الجنوبية', rk: 's', place: '—', img: '', pos: '', tone: '#8C4A3A', meta: 'الحجر · الإطارات الملونة', desc: 'بيوت حجرية شاهقة بنوافذ ملونة الإطارات وأشرطة بيضاء.', credit: '—' },
      { id: 'abha', name: 'مرتفعات أبها', short: 'أبها', region: 'المنطقة الجنوبية', rk: 's', place: '—', img: '', pos: '', tone: '#7E5A44', meta: 'الطين · الرقف الحجري', desc: 'بيوت طينية تحميها أشرطة من الحجر البارز من مياه المطر، ويزيّن داخلها فن القط.', credit: '—' },
      { id: 'bisha', name: 'بيشة الصحراوي', short: 'بيشة', region: 'المنطقة الجنوبية', rk: 's', place: '—', img: '', pos: '', tone: '#B8906A', meta: 'الطين', desc: 'عمارة طينية في بيئة صحراوية، بجدران سميكة وأفنية.', credit: '—' },
      { id: 'farasan', name: 'جزر فرسان', short: 'فرسان', region: 'المنطقة الجنوبية', rk: 's', place: '—', img: '', pos: '', tone: '#3F6F7A', meta: 'الحجر المرجاني · الجص المنحوت', desc: 'بيوت من الحجر المرجاني بزخارف جصية منحوتة، أشهرها بيت الرفاعي.', credit: '—' },
      { id: 'najran', name: 'النجراني', short: 'نجران', region: 'المنطقة الجنوبية', rk: 's', place: '—', img: '', pos: '', tone: '#9B6B3F', meta: 'الطين · الحواف البيضاء', desc: 'أبراج طينية متعددة الطوابق بجدران مائلة وحواف بيضاء.', credit: '—' }
    ];
  }
  num(i) { var a = '٠١٢٣٤٥٦٧٨٩'; var s = String(i + 1); if (s.length < 2) s = '0' + s; return s.split('').map(function (d) { return a[+d]; }).join(''); }
  startAnalysis() {
    var self = this, start = Date.now(), total = 6000;
    clearInterval(this.anT); clearInterval(this.nT);
    this.setState({ step: 3, an: 1, anNum: 0 });
    this.top();
    this.nT = setInterval(function () {
      var k = Math.min(1, (Date.now() - start) / total);
      self.setState({ anNum: Math.round(100 * k), an: Math.min(5, 1 + Math.floor(k * 5)) });
      if (k >= 1) { clearInterval(self.nT); setTimeout(function () { self.showResult(); }, 500); }
    }, 60);
  }
  showResult() {
    var self = this, start = Date.now();
    this.setState({ step: 4, pct: 0, grow: false });
    this.top();
    setTimeout(function () { self.setState({ grow: true }); }, 120);
    clearInterval(this.pT);
    this.pT = setInterval(function () {
      var k = Math.min(1, (Date.now() - start) / 1600);
      self.setState({ pct: Math.round(82 * (1 - Math.pow(1 - k, 3))) });
      if (k >= 1) clearInterval(self.pT);
    }, 30);
  }
  setFile(f, preset) {
    if (!f && !preset) return;
    var up = preset || { src: URL.createObjectURL(f), name: f.name };
    var self = this;
    clearTimeout(this.dT);
    this.setState({ upload: up, over: false, detecting: true, ck: 'hijazi' });
    this.dT = setTimeout(function () { self.setState({ detecting: false }); self.startAnalysis(); }, 1800);
  }
  renderVals() {
    var self = this, s = this.state, D = this.data();
    var byId = {}; D.forEach(function (x, i) { x.idx = i; byId[x.id] = x; });
    var P = { home: s.page === 'home', styles: s.page === 'styles', style: s.page === 'style', region: s.page === 'region', check: s.page === 'check', about: s.page === 'about' };
    var navCls = { home: s.page === 'home' ? 'on' : '', styles: (s.page === 'styles' || s.page === 'style') ? 'on' : '', about: s.page === 'about' ? 'on' : '' };
    var regions = [['all', 'الكل'], ['c', 'المنطقة الوسطى'], ['w', 'المنطقة الغربية'], ['e', 'المنطقة الشرقية'], ['n', 'المنطقة الشمالية'], ['s', 'المنطقة الجنوبية']];
    var filters = regions.map(function (r) {
      var c = r[0] === 'all' ? D.length : D.filter(function (x) { return x.rk === r[0]; }).length;
      return { label: r[1], count: self.num(c - 1), on: s.region === r[0] ? 'true' : 'false', cls: s.region === r[0] ? 'on' : '', pick: function () { self.setState({ region: r[0] }); } };
    });
    var pattern = ['s7', 's5 low', 's4', 's4', 's4', 's5', 's7', 's4', 's8'];
    var list = D.filter(function (x) { return s.region === 'all' || x.rk === s.region; });
    var tileOf = function (x, i) {
      return { id: x.id, name: x.name, short: x.short, region: x.region, place: x.place === '—' ? 'الصورة قيد الإضافة' : x.place, desc: x.desc, meta: x.meta, tone: x.tone, img: x.img, pos: x.pos || '50% 50%', alt: x.name + ' — ' + x.place,
        hasImg: !!x.img, noImg: !x.img, num: self.num(x.idx), badge: x.ready ? 'متاح للفحص' : 'قيد التوثيق', badgeColor: x.ready ? '#68100F' : '#7A6E60' };
    };
    var PALD = ['#8A1515', '#02564D', '#C0782E', '#E0B84A', '#1F5C8C'];
    var COL = {}; D.forEach(function (x, i) { COL[x.id] = PALD[i % PALD.length]; });
    var mix = function (hex, p) { var h = hex.replace('#', ''); var r = parseInt(h.substr(0, 2), 16), g = parseInt(h.substr(2, 2), 16), b = parseInt(h.substr(4, 2), 16); var bg = [251, 246, 238]; return 'rgb(' + Math.round(r * p + bg[0] * (1 - p)) + ',' + Math.round(g * p + bg[1] * (1 - p)) + ',' + Math.round(b * p + bg[2] * (1 - p)) + ')'; };
    var ILL = { abha: 'ea522640f29b140ac922002e89a6d4cc', ahsa: '9ea6a884a7d7be5c65588f8cf8affee1', asdar: '3a6c4adca6b7858327bdf4d6d3b29c3b', bisha: 'be8f0d3ef1103618f848e065f64be995', eastcoast: 'f7a616958713474792a72f88d72c1cab', eastnajdi: '207b9e8bb36185a999eb423ae03d09e3', farasan: '8c7ad3275349f2090fd440e85e235c92', hijazi: '53b5febf2ed658f9831b9865d91c418e', madinah: '0780f3d0110fbc19f6a4bed151faa78b', madrural: 'ee39a5e70ec57c710bd47907b10ab890', najdi: '8f6dbfcb1d24eb75e68449ab04362d25', najran: '51adfde48f4b8bc0ae1c8c6185aa11b6', northnajdi: 'a5968915e2dc9d4226caaf23e58ddd6a', qatif: 'e5ea9b003387b544641daa7b325b2c80', sarawat: '11df153931db399fa96394fb18a51fdc', tabuk: '513489d47e0a67d54f9de7ff5c3579ee', taif: '3adea8978170c2d626c6aa01965b6d48', tihama: 'd89589c927b80d024ba3de5aa937805f', tihamaf: '41389901ec87d197c27ab565d42643a8' };
    var POS = { najdi: [56.1, 47.1], madinah: [23.7, 48.7], madrural: [15.9, 35.6], hijazi: [21.8, 66.7], sarawat: [32.4, 74.2], taif: [27.5, 68.1], eastcoast: [72.3, 37.3], eastnajdi: [61.9, 38.2], ahsa: [70.2, 43.2], qatif: [71.9, 33.9], northnajdi: [33.4, 30.2], tabuk: [9.1, 38.0], tihama: [38.4, 92.7], tihamaf: [31.2, 78.5], asdar: [34.9, 85.8], abha: [38.1, 87.9], bisha: [37.7, 75.8], farasan: [34.8, 95.8], najran: [44.8, 91.0] };
    var lum = function (hex) { var h = hex.replace('#', ''); var c = [0, 2, 4].map(function (i) { var v = parseInt(h.substr(i, 2), 16) / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
    var fgOf = function (hex) { return (1.05 / (lum(hex) + 0.05)) >= 4.5 ? '#FFFFFF' : '#221B16'; };
    var sorted = list.filter(function (x) { return x.ready; }).concat(list.filter(function (x) { return !x.ready; }));
    var archive = sorted.map(function (x, i) {
      var col = COL[x.id] || '#8A6440';
      return { name: x.name, region: x.region, num: self.num(x.idx), ready: !!x.ready, color: col, fg: fgOf(col), tint: mix(col, 0.16), ill: blob(ILL[x.id]), delay: (Math.min(i, 8) * 0.05) + 's', open: function () { self.go('styles', { styleId: x.id, modal: true }); } };
    });
    var zone = { x: '22.4%', y: '63%', w: '9%', h: '34%', r: '-29deg', lx: '30%', ly: '60%' };
    var dxDots = D.map(function (x) { var p = POS[x.id]; return { name: x.name, x: p[0] + '%', y: p[1] + '%', cls: x.id === s.ck ? 'on' : '' }; });
    var dots = D.map(function (x) {
      var p = POS[x.id], inReg = s.region === 'all' || x.rk === s.region;
      return { name: x.name, x: p[0] + '%', y: p[1] + '%', color: COL[x.id], cls: inReg ? (s.region === 'all' ? '' : 'hot') : 'dim', open: function () { self.go('styles', { styleId: x.id, modal: true }); } };
    });
    var regionTitle = s.region === 'all' ? 'جميع الطرز' : 'طرز ' + regions.filter(function (r) { return r[0] === s.region; })[0][1];
    var archiveCount = self.num(sorted.length - 1) + ' طرازاً';
    var FACTS = {
      najdi: ['طين وحجر وخشب أثل', 'نوافذ صغيرة ومثلثات للتهوية', 'باب خشبي مزخرف بالمسامير', 'شرفات مسننة ومثلثات', 'الشرفات المسننة', [['طين', '#C9A075'], ['خشب الأثل', '#6E4A2E'], ['جص', '#E8D3B4'], ['ظل', '#5C3E24']]],
      madinah: ['حجر بازلتي وخشب', 'رواشين ونوافذ خشبية', 'باب خشبي مقوس', 'إطارات جصية فاتحة', 'الحجر البازلتي الداكن', [['بازلت', '#57534F'], ['خشب', '#8A5E3A'], ['جص', '#D9CFBF'], ['رمادي', '#6A6560']]],
      madrural: ['طين وحجر وجذوع النخل', 'نوافذ صغيرة مربعة', 'أبواب خشبية بسيطة', 'بروز جذوع النخل', 'البيوت المتلاصقة', [['طين', '#B98559'], ['حجر', '#C79A6E'], ['خشب', '#6E4A2E'], ['ظل', '#3E2A1E']]],
      hijazi: ['حجر منقبي وخشب ساج', 'رواشين خشبية عميقة', 'باب مزدوج محفور', 'شبك هندسي حجازي', 'الروشان', [['أبيض الجص', '#EFE7D9'], ['الحجر المنقبي', '#CDBB9A'], ['خشب الساج', '#7B5436'], ['أخضر الرواشين', '#3F6B55']]],
      sarawat: ['حجر مرصوف وخشب', 'نوافذ صغيرة بإطار أبيض', 'باب خشبي منقوش', 'مثلثات بيضاء فوق النوافذ', 'الأركان البارزة في السطح', [['حجر', '#8C8A80'], ['أبيض', '#E9E3D6'], ['خشب', '#6E4A2E'], ['رمادي داكن', '#4E4C45']]],
      taif: ['حجر وجص وخشب', 'رواشين ونوافذ مقوسة', 'باب مقوس بإطار حجري', 'شرفات جصية', 'الروشان على واجهة بيضاء', [['أبيض', '#F1EBDF'], ['حجر', '#B9A98C'], ['خشب', '#6E4A2E'], ['بني', '#8A6440']]],
      eastcoast: ['حجر بحري وجص', 'أقواس واسعة للتهوية', 'أبواب خشبية بين الأعمدة', 'نقوش جصية', 'البارجيل', [['جص', '#E6D9C0'], ['خشب', '#6E5A44'], ['حجر', '#CDBE9F'], ['بني', '#8A6440']]],
      eastnajdi: ['طين وجص', 'نوافذ خشبية بإطار جصي', 'باب خشبي بالمسامير', 'مثلثات جصية بيضاء', 'الشرفات المثلثة', [['طين', '#C7A27E'], ['جص', '#EDE4D3'], ['خشب', '#7E5838'], ['ظل', '#5C3E24']]],
      ahsa: ['طين وجص', 'نوافذ مدببة', 'أبواب تحت الأروقة', 'أقواس متكررة', 'الأروقة المقوسة', [['جص', '#E6D8BC'], ['طين', '#CDBB98'], ['خشب', '#8A6440'], ['بني داكن', '#6E5540']]],
      qatif: ['حجر وجص', 'نوافذ مدببة بشبك جصي', 'باب خشبي بإطار أبيض', 'شبك جصي منقوش', 'الشبابيك الجصية', [['حجر', '#D8C8A8'], ['جص', '#F2EADA'], ['خشب', '#6E5A44'], ['بني', '#8A6440']]],
      northnajdi: ['طين وحجر', 'نوافذ ضيقة', 'باب خشبي متين', 'شرفات مستديرة', 'البرج', [['طين', '#B88F66'], ['رملي', '#C7A882'], ['خشب', '#6E4A2E'], ['ظل', '#3E2A1E']]],
      tabuk: ['حجر مرجاني وجص', 'رواشين خشبية', 'أبواب مقوسة', 'بسيطة بأثر الجص', 'الروشان الساحلي', [['جص', '#E4D7BD'], ['حجر', '#C4B28E'], ['خشب', '#8A6440'], ['بني', '#6E5A44']]],
      tihama: ['قش وطين وخشب', 'نوافذ قليلة وصغيرة', 'باب خشبي منخفض', 'رسوم ملونة', 'العشّة بسقفها المخروطي', [['قش', '#A48A55'], ['طين', '#C9A77E'], ['أحمر', '#B0453A'], ['فاتح', '#E9E1D1']]],
      tihamaf: ['حجر', 'نوافذ صغيرة', 'أبواب خشبية بسيطة', 'حواف بيضاء للأسطح', 'البيوت المتدرجة على الصخر', [['حجر', '#9A8A78'], ['داكن', '#5E5448'], ['أبيض', '#EFE8DA'], ['خشب', '#3E2A1E']]],
      asdar: ['حجر', 'نوافذ بإطارات ملونة', 'باب خشبي ملون', 'أشرطة من المرو الأبيض', 'الأشرطة البيضاء', [['حجر', '#7E7466'], ['أبيض', '#F2EEE6'], ['أحمر', '#B0453A'], ['أخضر', '#3F7066']]],
      abha: ['طين وحجر', 'نوافذ ملونة بإطار أبيض', 'باب خشبي ملون', 'فن القط', 'الرقف الحجري', [['طين', '#B98F66'], ['رقف', '#7F7A70'], ['أبيض', '#F4EFE6'], ['أزرق', '#4E6690']]],
      bisha: ['طين وجذوع النخل', 'نوافذ صغيرة', 'باب خشبي بالمسامير', 'مثلثات بسيطة', 'الشرفات المسننة', [['طين', '#C89A6C'], ['رملي', '#D6B88E'], ['خشب', '#8A6440'], ['أخضر النخل', '#5E7A3A']]],
      farasan: ['حجر مرجاني وجص', 'نوافذ مقوسة بشبك جصي', 'باب خشبي ملون', 'نقوش جصية منحوتة', 'الجص المنحوت', [['جص', '#F4EEE3'], ['حجر', '#E3D6BD'], ['بيج', '#B7A585'], ['أزرق', '#2E7F8C']]],
      najran: ['طين', 'نوافذ صغيرة بإطار أبيض', 'باب خشبي بإطار أبيض', 'حواف بيضاء مسننة', 'البرج الطيني المائل', [['طين', '#A87B52'], ['أبيض', '#F2ECE2'], ['خشب', '#6E4A2E'], ['ظل', '#3E2A1E']]]
    };
    var c = byId[s.styleId] || byId.hijazi;
    var fx = FACTS[c.id], ccol = COL[c.id];
    var cur = { name: c.name, region: c.region, desc: c.desc, color: ccol, tint: mix(ccol, 0.16), ill: blob(ILL[c.id]), ready: !!c.ready, notReady: !c.ready,
      num: self.num(c.idx), fg: fgOf(ccol), mat: fx[0], win: fx[1], door: fx[2], deco: fx[3], elem: fx[4], colors: fx[5].map(function (p) { return { name: p[0], hex: p[1] }; }) };
    var k = byId[s.ck] || byId.hijazi;
    var ck = { color: COL[k.id], tint: mix(COL[k.id], 0.14), name: k.name, region: k.region, desc: k.desc, img: blob(ILL[k.id]), pos: '50% 100%', tone: k.tone, short: k.short, alt: k.name, hasImg: true, noImg: false, ready: !!k.ready, notReady: !k.ready };
    var order = ['hijazi'].concat(D.map(function (x) { return x.id; }).filter(function (id) { return id !== 'hijazi'; }));
    var pick = order.map(function (id) {
      var x = byId[id], t = tileOf(x, 0), on = s.ck === id;
      t.img = blob(ILL[id]); t.hasImg = true; t.noImg = false; t.pos = '50% 100%';
      t.cls = on ? 'on' : ''; t.on = on ? 'true' : 'false';
      t.badge = x.ready ? 'متاح للفحص' : 'بيانات التحليل غير متاحة بعد';
      t.tint = mix(COL[id], 0.16); t.go = x.ready ? 'ارفع تصميمك ←' : 'قريباً';
      t.badge = x.ready ? 'متاح للفحص' : 'قريباً';
      t.choose = function () { if (x.ready) { self.setState({ ck: id, step: 2, soon: '' }); self.top(); } else { self.setState({ soon: x.name }); } };
      return t;
    });
    var stepLabels = ['ارفع التصميم', 'الفحص', 'النتيجة'];
    var stepMap = { 1: 1, 2: 1, 3: 2, 4: 3 }, sv = stepMap[s.step] || 1;
    var steps = stepLabels.map(function (l, i) { var n = i + 1; return { n: self.num(i), label: l, cls: sv === n ? 'on' : (sv > n ? 'done' : ''), cur: sv === n ? 'step' : 'false' }; });
    var anDef = ['تحليل النسب', 'فحص النوافذ والأبواب', 'قراءة الألوان', 'التعرف على العنصر المميّز', 'حساب نسبة التوافق'];
    var anItems = anDef.map(function (d, i) { var n = i + 1; return { label: d, cls: s.an > n || (s.anNum >= 100) ? 'done' : (s.an === n ? 'on' : '') }; });
    var A = { a1: s.an >= 1, a2: s.an >= 2, a3: s.an >= 3, a4: s.an >= 4 };
    var src = 'خريطة العمارة السعودية — الطراز الحجازي الساحلي، [رقم البند]';
    var ok = [
      { name: 'التكوين العام', doc: 'كتلة رأسية متعددة الطوابق.', vis: 'كتلة من طابقين بمحاور واضحة.' },
      { name: 'الرواشين الخشبية', doc: 'روشان خشبي بارز على الواجهة.', vis: 'روشانان خشبيان بارزان في الواجهة الرئيسية.' },
      { name: 'الأبواب الخشبية المنقوشة', doc: 'أبواب خشبية مزدوجة محفورة.', vis: 'باب رئيسي مزدوج بنقوش هندسية.' },
      { name: 'نسب النوافذ', doc: 'نوافذ رأسية يزيد ارتفاعها على عرضها.', vis: 'نوافذ رأسية بمظلات خشبية.' }
    ];
    var rv = [
      { name: 'مادة الواجهة', doc: 'حجر منقبي مكسو بالجص الفاتح.', vis: 'كسوة حجرية ظاهرة في الكتلة الرئيسية.' },
      { name: 'الشرفات المسننة أعلى الواجهة', doc: 'تتويج بشرفات جصية مخرّمة.', vis: 'شرفات مثلثة أقرب إلى الطراز النجدي.' },
      { name: 'إطار المدخل', doc: 'مدخل بإطار بسيط.', vis: 'إطار حجري عريض وبارز حول الباب.' }
    ];
    var okItems = ok.map(function (x, i) { x.src = src; x.delay = (i * 0.1) + 's'; return x; });
    var rvItems = rv.map(function (x, i) { x.src = src; x.delay = (0.2 + i * 0.1) + 's'; return x; });
    var W = [['النِّسب', 86], ['النوافذ والأبواب', 84], ['المواد والألوان', 72], ['العنصر المميّز', 90]];
    var weights = W.map(function (w, i) { var segs = []; for (var j = 0; j < 10; j++) segs.push({ cls: s.grow && j < Math.round(w[1] / 10) ? 'on' : '', d: (0.2 + i * 0.1 + j * 0.06) + 's' }); return { n: self.num(i), label: w[0], score: w[1] + '%', segs: segs, delay: (i * 0.08) + 's' }; });
    var PAL = [['#68100F','#F5F1EA'],['#3F7066','#F5F1EA'],['#D2B065','#221B16'],['#A65A35','#F5F1EA'],['#4E6690','#F5F1EA'],['#DDB0A6','#221B16'],['#6B6A48','#F5F1EA'],['#CBBA9E','#221B16'],['#8A6440','#F5F1EA']];
    var stripOne = D.map(function (x, i) { var c0 = COL[x.id]; return { name: x.name, num: self.num(i), bg: c0, fg: '#FFFFFF', open: function () { self.go('styles', { styleId: x.id, modal: true }); } }; });
    var strip = stripOne.concat(stripOne);
    var WK = [
      ['ارفع التصميم', 'صورة أو إظهار لواجهة تصميمك. لا حاجة لحساب.', '#8F6A1E', '#F1E6CB'],
      ['افحص', 'يحلّل نُعمِّر النِّسب والنوافذ والأبواب والمواد والعنصر المميّز، ويقارنها بالمعيار الموثق.', '#02564D', '#DCE7E2'],
      ['اقرأ النتيجة', 'نسبة توافق واضحة، وما توافق وما يحتاج مراجعة.', '#68100F', '#F0DEDA']
    ];
    var walk = WK.map(function (w, i) { var n = i + 1, on = s.walk === n; return { n: self.num(i), title: w[0], text: w[1], accent: w[2], numColor: on ? w[2] : '#B5AA9A', cls: on ? 'on' : '', on: on ? 'true' : 'false', active: on, anim: s.walkAuto ? 'run' : '', pick: function () { self.setState({ walk: n, walkAuto: false }); } }; });
    var wv = { s1: s.walk === 1, s2: s.walk === 2, s3: s.walk === 3, tint: (WK[s.walk - 1] || WK[0])[3] };
    var CITIES = [
      ['مكة المكرمة', 'hijazi'], ['جدة', 'hijazi'], ['رابغ', 'hijazi'], ['ينبع', 'hijazi'],
      ['المدينة المنورة', 'madinah'], ['العلا', 'madrural'], ['خيبر', 'madrural'],
      ['الطائف', 'taif'], ['الرياض', 'najdi'], ['الدرعية', 'najdi'], ['بريدة', 'najdi'], ['عنيزة', 'najdi'], ['الخرج', 'najdi'], ['شقراء', 'najdi'],
      ['حائل', 'northnajdi'], ['سكاكا', 'northnajdi'], ['دومة الجندل', 'northnajdi'], ['تبوك', 'northnajdi'],
      ['الوجه', 'tabuk'], ['أملج', 'tabuk'], ['ضباء', 'tabuk'],
      ['الدمام', 'eastcoast'], ['الخبر', 'eastcoast'], ['الجبيل', 'eastcoast'], ['القطيف', 'qatif'], ['تاروت', 'qatif'], ['صفوى', 'qatif'],
      ['الأحساء', 'ahsa'], ['الهفوف', 'ahsa'], ['المبرز', 'ahsa'], ['حفر الباطن', 'eastnajdi'], ['النعيرية', 'eastnajdi'],
      ['الباحة', 'sarawat'], ['بلجرشي', 'sarawat'], ['النماص', 'sarawat'], ['ذي عين', 'tihamaf'], ['المخواة', 'tihamaf'], ['محايل عسير', 'tihamaf'],
      ['أبها', 'abha'], ['خميس مشيط', 'abha'], ['رجال ألمع', 'asdar'], ['جازان', 'tihama'], ['صبيا', 'tihama'], ['فرسان', 'farasan'],
      ['نجران', 'najran'], ['شرورة', 'najran'], ['بيشة', 'bisha']
    ];
    var HL = { abha: 'ffb04e8bcef99674cf58d88ea1bdbfa2', ahsa: 'eb2211b23644be26b983e131fa2f0c74', asdar: '8ae530fbbb20f708a2f7412d43b8413a', bisha: '2e5341b472091616015054a68b8b7e79', eastcoast: '2b876b02ed03ffd8ee6d3c1221516cac', eastnajdi: '3c0606b75d406b41552756526a17616f', farasan: 'ef0e7bc9967627b247df5cf617436909', hijazi: '7cd5f7242f5cd00fa724010e0fea72ba', madinah: 'faf1c6cd7e9007c00a723f52e2e10968', madrural: '34d7813a78eccfadc7fcdfe2f76fbb33', najdi: '34ecd9fab526af0b9b9f8eb738d5c17b', najran: '085557387a13aa142242d7fb7f70b49d', northnajdi: 'ca37848d18f3925cfab380a19ca99c4d', qatif: 'f322b4d83c4f3f090cea36a3c3cbe316', sarawat: '3a464e4d82d097f0239fe9702f2d0ecf', tabuk: 'bc6e651bb799226a714c36d32ad23b7a', taif: '3a7f8d5f2ecc35ef5f50bb8e20e002ef', tihama: '0e5d7dcf4ead63984c3ec74444de7c40', tihamaf: 'ca697f1ef2d534eae45f51849c5732fe' };
    var CEN = { abha: [45.5, 84.4], ahsa: [75.4, 44.2], asdar: [44.6, 85.5], bisha: [46.6, 79.0], eastcoast: [71.3, 30.8], eastnajdi: [62.7, 31.0], farasan: [41.8, 97.0], hijazi: [32.9, 66.0], madinah: [30.4, 50.7], madrural: [34.4, 49.1], najdi: [48.9, 49.1], najran: [56.0, 86.6], northnajdi: [35.1, 18.7], qatif: [74.3, 34.3], sarawat: [40.0, 79.5], tabuk: [24.3, 46.6], taif: [35.8, 68.0], tihama: [43.3, 91.0], tihamaf: [42.4, 84.8] };
    var cityPick = function (c) { return function () { self.setState({ rcity: c[0], rq: '' }); self.top(); }; };
    var norm = function (x) { return x.replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/^ال/, '').replace(/\s+/g, ' ').trim(); };
    var rq = (s.rq || '').trim();
    var sug = rq ? CITIES.filter(function (c) { var a = norm(c[0]), q = norm(rq); return a.indexOf(q) >= 0 || c[0].indexOf(rq) >= 0; }).slice(0, 6).map(function (c) { return { city: c[0], area: byId[c[1]].region, pick: cityPick(c) }; }) : [];
    var POP = ['مكة المكرمة', 'المدينة المنورة', 'الرياض', 'جدة', 'الطائف', 'العلا', 'أبها', 'الأحساء', 'نجران', 'جازان'];
    var pop = POP.map(function (n) { var c = CITIES.filter(function (x) { return x[0] === n; })[0]; return { city: c[0], pick: cityPick(c) }; });
    var rc = CITIES.filter(function (x) { return x[0] === s.rcity; })[0];
    var rsx = rc ? byId[rc[1]] : byId.hijazi;
    var cen = CEN[rsx.id], flip = cen[0] > 55;
    var lpos = flip ? ('right: ' + (100 - cen[0] + 6).toFixed(1) + '%; top: ' + Math.min(cen[1] - 3, 90).toFixed(1) + '%') : ('left: ' + (cen[0] + 6).toFixed(1) + '%; top: ' + Math.min(cen[1] - 3, 90).toFixed(1) + '%');
    var rg = { q: s.rq || '', hasQ: !!rq, noQ: !rq, sug: sug, empty: !!rq && sug.length === 0, pop: pop, has: !!rc, none: !rc, city: rc ? rc[0] : '',
      map: rc ? blob(HL[rsx.id]) : 'assets/ac90f60afa24551134d31ae6fd5e0d78.png', flip: flip ? 'flip' : '', lpos: lpos,
      note: rc ? 'المنطقة المحددة: نطاق ' + rsx.name + '.' : 'لكل لون على الخريطة طراز معماري.' };
    var rs = { name: rsx.name, region: rsx.region, desc: rsx.desc, color: COL[rsx.id] };
    var up = s.upload || { src: '', name: '' };
    return {
      detecting: !!s.detecting, zone: zone, dxDots: dxDots,
      modalOpen: !!s.modal, closeModal: function () { self.setState({ modal: false }); },
      prevStyle: function () { var i = D.findIndex(function (x) { return x.id === (self.state.styleId || 'hijazi'); }); self.setState({ styleId: D[(i - 1 + D.length) % D.length].id }); },
      nextStyle: function () { var i = D.findIndex(function (x) { return x.id === (self.state.styleId || 'hijazi'); }); self.setState({ styleId: D[(i + 1) % D.length].id }); },
      strip: strip, walk: walk, wv: wv, archiveCount: archiveCount, dots: dots, regionTitle: regionTitle,
      P: P, navCls: navCls, menu: s.menu, menuOpen: s.menu ? 'true' : 'false',
      filters: filters, archive: archive, cur: cur, ck: ck, pick: pick, steps: steps,
      S: { s1: s.step === 1, s2: s.step === 2, s3: s.step === 3, s4: s.step === 4 },
      upload: up, hasUpload: !!s.upload, noUpload: !s.upload, dropCls: s.over ? 'over' : '',
      soonOn: !!s.soon, soonText: 'الفحص وفق ' + (s.soon || '') + ' غير متاح بعد. الطراز الحجازي الساحلي متاح للفحص الآن.',
      anItems: anItems, A: A, anNum: s.anNum || 0, anPctW: (s.anNum || 0) + '%', 
      pct: s.pct, weights: weights, okItems: okItems, rvItems: rvItems,
      goHome: function () { self.go('home'); },
      goStyles: function () { self.go('styles'); },
      goAbout: function () { self.go('about'); },
      rg: rg, rs: rs,
      onQ: function (e) { self.setState({ rq: (e && e.target && e.target.value) || '' }); },
      rgReset: function () { self.setState({ rcity: '', rq: '' }); self.top(); },
      openRs: function () { var c = CITIES.filter(function (x) { return x[0] === self.state.rcity; })[0]; self.setState({ styleId: c ? c[1] : 'hijazi', modal: true }); },
      goRegion: function () { self.go('region', { rcity: '', rq: '' }); },
      goCheck: function () { self.go('check', { step: 1, upload: null, detecting: false }); },
      toggleMenu: function () { self.setState({ menu: !self.state.menu }); },
      openHijazi: function () { self.go('styles', { styleId: 'hijazi', modal: true }); },
      checkWithCur: function () { self.go('check', { step: 1, upload: null, detecting: false }); },
      openCk: function () { self.go('styles', { styleId: self.state.ck, modal: true }); },
      toUpload: function () { self.setState({ step: 2 }); self.top(); },
      toStep1: function () { self.setState({ step: 1 }); self.top(); },
      useSample: function () { self.setFile(null, { src: 'assets/5bc38b308904b42dd913236ece8f1041.jpg', name: 'فيلا-حجازية-معاصرة.jpg' }); },
      onFile: function (e) { var f = e && e.target && e.target.files && e.target.files[0]; self.setFile(f); },
      onDragOver: function (e) { e.preventDefault(); if (!self.state.over) self.setState({ over: true }); },
      onDragLeave: function () { self.setState({ over: false }); },
      onDrop: function (e) { e.preventDefault(); var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]; self.setFile(f); },
      startAnalysis: function () { self.startAnalysis(); },
      again: function () { clearInterval(self.pT); self.setState({ step: 1, upload: null, an: 0, pct: 0, detecting: false }); self.top(); }
    };
  }
}

(function(){
  var comp = new Component({});
  var vals = Vue.reactive(comp.renderVals());
  var pending = false;
  comp.__up = function(){ if (pending) return; pending = true; Promise.resolve().then(function(){ pending = false; Object.assign(vals, comp.renderVals()); }); };
  var tpl = document.getElementById('app-tpl').innerHTML;
  Vue.createApp({ template: tpl, setup: function(){ return vals; }, mounted: function(){ if (comp.componentDidMount) comp.componentDidMount(); } }).mount('#app');
})();
