//! now.js locale configuration
//! locale : Indonesian [id]
//! author : Mohammad Satrio Utomo : https://github.com/tyok
//! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

export default {
  months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
  monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
  weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
  weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
  weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
  longDateFormat: {
    LT: 'HH.mm',
    LTS: 'HH.mm.ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY [pukul] HH.mm',
    LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
  },
  meridiemParse: /pagi|siang|sore|malam/,
  meridiemHour(hour, meridiem) {
    let h = hour;
    if (h === 12) {
      h = 0;
    }
    if (meridiem === 'pagi') {
      return h;
    } else if (meridiem === 'siang') {
      return h >= 11 ? h : h + 12;
    } else if (meridiem === 'sore' || meridiem === 'malam') {
      return h + 12;
    }
    return h;
  },
  meridiem(hours) {
    if (hours < 11) {
      return 'pagi';
    } else if (hours < 15) {
      return 'siang';
    } else if (hours < 19) {
      return 'sore';
    }
    return 'malam';
  },
  calendar: {
    sameDay: '[Hari ini pukul] LT',
    nextDay: '[Besok pukul] LT',
    nextWeek: 'dddd [pukul] LT',
    lastDay: '[Kemarin pukul] LT',
    lastWeek: 'dddd [lalu pukul] LT',
    sameElse: 'L',
  },
  relativeTime: {
    future: 'dalam %s',
    past: '%s yang lalu',
    s: 'beberapa detik',
    m: 'semenit',
    mm: '%d menit',
    h: 'sejam',
    hh: '%d jam',
    d: 'sehari',
    dd: '%d hari',
    M: 'sebulan',
    MM: '%d bulan',
    y: 'setahun',
    yy: '%d tahun',
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 7, // The week that contains Jan 1st is the first week of the year.
  },
};
