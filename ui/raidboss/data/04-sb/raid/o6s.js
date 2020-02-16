'use strict';

// O6S - Sigmascape 2.0 Savage
// localization:
//   de: timeline done, triggers incomplete
//   fr: timeline done, triggers incomplete
//   ja: timeline done, triggers incomplete
[{
  zoneRegex: /^Sigmascape V2\.0 \(Savage\)$/,
  timelineFile: 'o6s.txt',
  triggers: [
    {
      id: 'O6S Demonic Shear',
      regex: Regexes.startsUsing({ id: '2829', source: 'Demon Chadarnook' }),
      regexDe: Regexes.startsUsing({ id: '2829', source: 'Gefallen(?:e|er|es|en) Chadarnook' }),
      regexFr: Regexes.startsUsing({ id: '2829', source: 'Démon Chadarnouk' }),
      regexJa: Regexes.startsUsing({ id: '2829', source: 'チャダルヌーク・デーモン' }),
      regexCn: Regexes.startsUsing({ id: '2829', source: '恶魔查达奴克' }),
      regexKo: Regexes.startsUsing({ id: '2829', source: '차다르누크 악령' }),
      alertText: function(data, matches) {
        if (matches.target == data.me) {
          return {
            en: 'Tank Buster on YOU',
            de: 'Tank Buster auf DIR',
            fr: 'Tankbuster sur VOUS',
            ko: '탱버 → 나',
          };
        }
        if (data.role == 'healer') {
          return {
            en: 'Buster on ' + data.ShortName(matches.target),
            de: 'Buster auf ' + data.ShortName(matches.target),
            fr: 'Tankbuster sur '+data.ShortName(matches.target),
            ko: '탱버 → '+data.ShortName(matches.target),
          };
        }
      },
      tts: function(data, matches) {
        if (matches.target == data.me) {
          return {
            en: 'buster',
            de: 'tenkbasta',
            fr: 'tankbuster',
            ko: '탱버',
            ja: 'バスター',
          };
        }
      },
    },
    {
      id: 'O6S Storms Grip',
      regex: Regexes.addedCombatant({ name: 'The Storm\'s Grip', capture: false }),
      regexDe: Regexes.addedCombatant({ name: 'Sturmgebiet', capture: false }),
      regexFr: Regexes.addedCombatant({ name: 'Zone De Tempête', capture: false }),
      regexJa: Regexes.addedCombatant({ name: '暴風域', capture: false }),
      regexCn: Regexes.addedCombatant({ name: '暴风领域', capture: false }),
      regexKo: Regexes.addedCombatant({ name: '폭풍 영역', capture: false }),
      condition: function(data) {
        return data.role == 'tank';
      },
      infoText: {
        en: 'Hallowed Wind Stack',
        de: 'Heiliger Boden Wind',
        fr: 'Packez vous dans le vent',
        ko: '쉐어징 천무',
        ja: '隅でスタック',
      },
    },
    {
      id: 'O6S Demonic Stone',
      regex: Regexes.headMarker({ id: '0001' }),
      alarmText: function(data, matches) {
        if (data.me == matches.target) {
          return {
            en: 'Demonic Stone on YOU',
            de: 'Dämonischer Stein auf DIR',
            fr: 'Pierre démoniaque sur VOUS',
            ko: '악령의 돌 장판 → 나',
            ja: 'デモニックストーン on YOU',
          };
        }
      },
    },
    {
      id: 'O6S Last Kiss Tracker',
      regex: Regexes.headMarker({ id: '0017' }),
      run: function(data, matches) {
        data.lastKiss = matches.target;
      },
    },
    {
      id: 'O6S Last Kiss Marker',
      regex: Regexes.headMarker({ id: '0017' }),
      condition: function(data, matches) {
        return data.me == matches.target;
      },
      alarmText: {
        en: 'Last Kiss on YOU',
        de: 'Letzter Kuss auf DIR',
        fr: 'Baiser fatal sur VOUS',
        ko: '죽음의 입맞춤 → 나',
        ja: '口づけ on YOU',
      },
      tts: {
        en: 'last kiss',
        de: 'letz ter kuss',
        fr: 'baiser fatal',
        ko: '죽음의 입맞춤',
        ja: '口づけ',
      },
    },
    {
      id: 'O6S Last Kiss',
      regex: Regexes.gainsEffect({ effect: 'Last Kiss' }),
      regexDe: Regexes.gainsEffect({ effect: 'Letzter Kuss' }),
      regexFr: Regexes.gainsEffect({ effect: 'Baiser Fatal' }),
      regexJa: Regexes.gainsEffect({ effect: '死の口づけ' }),
      regexCn: Regexes.gainsEffect({ effect: '死亡之吻' }),
      regexKo: Regexes.gainsEffect({ effect: '죽음의 입맞춤' }),
      condition: function(data, matches) {
        // The person who gets the marker briefly gets the effect, so
        // don't tell them twice.
        return data.me == matches.target && data.lastKiss != data.me;
      },
      alarmText: {
        en: 'Last Kiss on YOU',
        de: 'Letzter Kuss auf DIR',
        fr: 'Baiser fatal sur VOUS',
        ko: '죽음의 입맞춤 → 나',
        ja: '口づけ on YOU',
      },
      tts: {
        en: 'last kiss',
        de: 'letz ter kuss',
        fr: 'baiser fatal',
        ko: '죽음의 ',
        ja: '口づけ',
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Demon Chadarnook': 'gefallen(?:e|er|es|en) Chadarnook',
        'Easterly': 'Ostwind',
        'Goddess Chadarnook': 'heilig(?:e|er|es|en) Chadarnook',
        'Haunt': 'Verfolgung',
        'I have claimed the girl in the picture!': 'I have claimed the girl in the picture!', // FIXME
        'Portrayal of Earth': 'Erdgemälde',
        'Portrayal of Fire': 'Feuergemälde',
        'Portrayal of Water': 'Wassergemälde',
        'Portrayal of Wind': 'Windgemälde',
        'The Storm\'s Grip': 'Sturmgebiet',
      },
      'replaceText': {
        '--untargetable--': '--nich anvisierbar--',
        'Demonic Howl': 'Dämonisches Heulen',
        'Demonic Pain': 'Dämonischer Schmerz',
        'Demonic Shear': 'Dämonische Schere',
        'Demonic Spout': 'Dämonischer Überschwang',
        'Demonic Stone': 'Dämonischer Stein',
        'Demonic Storm': 'Dämonischer Sturm',
        'Demonic Typhoon': 'Dämonischer Taifun',
        'Demonic Wave': 'Dämonische Welle',
        'Divine Lure': 'Göttliche Verlockung',
        'Downpour': 'Flutschwall',
        'Dull Pain': 'Dumpfer Schmerz',
        'Earthquake': 'Erdbeben',
        'Easterlies': 'Ostwinde',
        'Featherlance': 'Federlanze',
        'Flash Fire': 'Blitzfeuer',
        'Flash Flood': 'Blitzregen',
        'Flash Gale': 'Blitzwind',
        'Flash Torrent': 'Blitzregen',
        'Last Kiss': 'Todeskuss',
        'Lullaby': 'Wiegenlied',
        'Materialize': 'Materialisierung',
        'Poltergeist': 'Poltergeist',
        'Possession': 'Besessenheit',
        'Release': 'Befreiung',
        'Rock Hard': 'Felsspalter',
        'Song Of Bravery': 'Lied der Tapferkeit',
        'The Price': 'Tödliche Versuchung',
      },
      '~effectNames': {
        'Apathetic': 'Apathie',
        'Black Paint': 'Schwarze Farbe',
        'Blue Paint': 'Blaue Farbe',
        'Fire Resistance Up': 'Feuerresistenz +',
        'Invisible': 'Unsichtbar',
        'Knockback Penalty': 'Rückstoß unwirksam',
        'Last Kiss': 'Todeskuss',
        'Red Paint': 'Rote Farbe',
        'Seduced': 'Versuchung',
        'Slippery Prey': 'Unmarkierbar',
        'Yellow Paint': 'Gelbe Farbe',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Demon Chadarnook': 'démon Chadarnouk',
        'Easterly': 'rafale ultime',
        'Goddess Chadarnook': 'déesse Chadarnouk',
        'Haunt': 'Cauchemar corporel',
        'I have claimed the girl in the picture!': 'I have claimed the girl in the picture!', // FIXME
        'Portrayal of Earth': 'peinture de la terre',
        'Portrayal of Fire': 'peinture du feu',
        'Portrayal of Water': 'peinture de l\'eau',
        'Portrayal of Wind': 'peinture du vent',
        'The Storm\'s Grip': 'Emprise de la tempête',
      },
      'replaceText': {
        '--untargetable--': '--Impossible à cibler--',
        'Demonic Howl': 'Hurlement démoniaque',
        'Demonic Pain': 'Douleur démoniaque',
        'Demonic Shear': 'Cisailles démoniaques',
        'Demonic Spout': 'Vague démoniaque',
        'Demonic Stone': 'Pierre démoniaque',
        'Demonic Storm': 'Tempête démoniaque',
        'Demonic Typhoon': 'Typhon démoniaque',
        'Demonic Wave': 'Vague démoniaque',
        'Divine Lure': 'Séduction divine',
        'Downpour': 'Déluge',
        'Dull Pain': 'Douleur sourde',
        'Earthquake': 'Grand séisme',
        'Easterlies': 'Rafale Ultim',
        'Featherlance': 'Lance de plume',
        'Flash Fire': 'Flammes subites',
        'Flash Flood': 'Pluie subite',
        'Flash Gale': 'Vent subit',
        'Flash Torrent': 'Pluie subite',
        'Last Kiss': 'Baiser fatal',
        'Lullaby': 'Berceuse',
        'Materialize': 'Matérialisation',
        'Poltergeist': 'Esprit frappeur',
        'Possession': 'Possession',
        'Release': 'Libération',
        'Rock Hard': 'Brise-roc',
        'Song Of Bravery': 'Chant du courage',
        'The Price': 'Tentation mortelle',
      },
      '~effectNames': {
        'Apathetic': 'Apathie',
        'Black Paint': 'Pinceau chocobo : noir',
        'Blue Paint': 'Pinceau chocobo : bleu',
        'Fire Resistance Up': 'Résistance au feu accrue',
        'Invisible': 'Invisible',
        'Knockback Penalty': 'Projections désactivées',
        'Last Kiss': 'Baiser fatal',
        'Red Paint': 'Pinceau chocobo : rouge',
        'Seduced': 'Séduction',
        'Slippery Prey': 'Marquage impossible',
        'Yellow Paint': 'Pinceau chocobo : jaune',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Demon Chadarnook': 'チャダルヌーク・デーモン',
        'Easterly': '極風',
        'Goddess Chadarnook': 'チャダルヌーク・ゴッデス',
        'Haunt': '思念体',
        'I have claimed the girl in the picture!': 'I have claimed the girl in the picture!', // FIXME
        'Portrayal of Earth': '土の絵画',
        'Portrayal of Fire': '火の絵画',
        'Portrayal of Water': '水の絵画',
        'Portrayal of Wind': '風の絵画',
        'The Storm\'s Grip': '暴風域',
      },
      'replaceText': {
        '--untargetable--': '--untargetable--',
        'Demonic Howl': 'デモニックハウル',
        'Demonic Pain': 'デモニックペイン',
        'Demonic Shear': 'デモニックシアー',
        'Demonic Spout': 'デモニックスパウト',
        'Demonic Stone': 'デモニックストーン',
        'Demonic Storm': 'デモニックストーム',
        'Demonic Typhoon': 'デモニックタイフーン',
        'Demonic Wave': 'デモニックウェーブ',
        'Divine Lure': '女神の誘惑',
        'Downpour': '水責め',
        'Dull Pain': 'ダルペイン',
        'Earthquake': '大地震',
        'Easterlies': '極風',
        'Featherlance': 'フェザーランス',
        'Flash Fire': 'フラッシュファイア',
        'Flash Flood': 'フラッシュレイン',
        'Flash Gale': 'フラッシュウィンド',
        'Flash Torrent': 'フラッシュレイン',
        'Last Kiss': '死の口づけ',
        'Lullaby': '子守歌',
        'Materialize': '実体化',
        'Poltergeist': 'ポルターガイスト',
        'Possession': '絵画憑依',
        'Release': '憑依解除',
        'Rock Hard': 'ロッククラッシャー',
        'Song Of Bravery': '勇気の歌',
        'The Price': '死の誘い',
      },
      '~effectNames': {
        'Apathetic': '無気力',
        'Black Paint': 'チョコボの筆：黒色',
        'Blue Paint': 'チョコボの筆：水色',
        'Fire Resistance Up': '火属性耐性向上',
        'Invisible': 'インビジブル',
        'Knockback Penalty': 'ノックバック無効',
        'Last Kiss': '死の口づけ',
        'Red Paint': 'チョコボの筆：赤色',
        'Seduced': '誘惑',
        'Slippery Prey': 'マーキング対象外',
        'Yellow Paint': 'チョコボの筆：黄色',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Demon Chadarnook': '恶魔查达奴克',
        'Easterly': '极风',
        'Goddess Chadarnook': '神圣查达奴克',
        'Haunt': '幻影',
        'I have claimed the girl in the picture!': 'I have claimed the girl in the picture!', // FIXME
        'Portrayal of Earth': '土之画作',
        'Portrayal of Fire': '火之画作',
        'Portrayal of Water': '水之画作',
        'Portrayal of Wind': '风之画作',
        'The Storm\'s Grip': '暴风域',
      },
      'replaceText': {
        '--untargetable--': '--untargetable--', // FIXME
        'Demonic Howl': '恶魔啸',
        'Demonic Pain': '恶魔痛',
        'Demonic Shear': '恶魔斩',
        'Demonic Spout': '恶魔喷',
        'Demonic Stone': '恶魔飞石',
        'Demonic Storm': '恶魔风暴',
        'Demonic Typhoon': '恶魔台风',
        'Demonic Wave': '恶魔波',
        'Divine Lure': '女神的诱惑',
        'Downpour': '水刑',
        'Dull Pain': '钝痛',
        'Earthquake': '大地震',
        'Easterlies': 'Easterlies', // FIXME
        'Featherlance': '羽枪',
        'Flash Fire': '闪光炎',
        'Flash Flood': '闪光雨',
        'Flash Gale': '闪光风',
        'Flash Torrent': '闪光雨',
        'Last Kiss': '死亡之吻',
        'Lullaby': '摇篮曲',
        'Materialize': '实体化',
        'Poltergeist': '骚灵',
        'Possession': '附身画像',
        'Release': '附身解除',
        'Rock Hard': '碎岩',
        'Song Of Bravery': '勇气之歌',
        'The Price': '死亡诱惑',
      },
      '~effectNames': {
        'Apathetic': '无力',
        'Black Paint': '黑色陆行鸟之笔',
        'Blue Paint': '蓝色陆行鸟之笔',
        'Fire Resistance Up': '火属性耐性提升',
        'Invisible': '无形',
        'Knockback Penalty': '击退无效',
        'Last Kiss': '死亡之吻',
        'Red Paint': '红色陆行鸟之笔',
        'Seduced': '魅惑',
        'Slippery Prey': '非目标',
        'Yellow Paint': '黄色陆行鸟之笔',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Demon Chadarnook': '차다르누크 악령',
        'Easterly': '극풍',
        'Goddess Chadarnook': '차다르누크 여신',
        'Haunt': '사념체',
        'I have claimed the girl in the picture!': 'I have claimed the girl in the picture!', // FIXME
        'Portrayal of Earth': '땅의 그림',
        'Portrayal of Fire': '불의 그림',
        'Portrayal of Water': '물의 그림',
        'Portrayal of Wind': '바람의 그림',
        'The Storm\'s Grip': '폭풍 영역',
      },
      'replaceText': {
        '--untargetable--': '--untargetable--', // FIXME
        'Demonic Howl': '악령의 외침',
        'Demonic Pain': '악령의 고통',
        'Demonic Shear': '악령의 참격',
        'Demonic Spout': '악령의 물기둥',
        'Demonic Stone': '악령의 돌',
        'Demonic Storm': '악령의 폭풍',
        'Demonic Typhoon': '악령의 태풍',
        'Demonic Wave': '악령의 물결',
        'Divine Lure': '여신의 유혹',
        'Downpour': '물고문',
        'Dull Pain': '약한 고통',
        'Earthquake': '대지진',
        'Easterlies': 'Easterlies', // FIXME
        'Featherlance': '깃털창',
        'Flash Fire': '불바다',
        'Flash Flood': '급류',
        'Flash Gale': '돌풍',
        'Flash Torrent': '급류',
        'Last Kiss': '죽음의 입맞춤',
        'Lullaby': '자장가',
        'Materialize': '실체화',
        'Poltergeist': '폴터가이스트',
        'Possession': '그림 빙의',
        'Release': '빙의 해제',
        'Rock Hard': '암석 분쇄',
        'Song Of Bravery': '용기의 노래',
        'The Price': '죽음의 유혹',
      },
      '~effectNames': {
        'Apathetic': '무기력',
        'Black Paint': '검은색 초코보 붓',
        'Blue Paint': '파란색 초코보 붓',
        'Fire Resistance Up': '불속성 저항 상승',
        'Invisible': '투명화',
        'Knockback Penalty': '밀쳐내기 금지',
        'Last Kiss': '죽음의 입맞춤',
        'Red Paint': '빨간색 초코보 붓',
        'Seduced': '유혹',
        'Slippery Prey': '표식 대상 제외',
        'Yellow Paint': '노란색 초코보 붓',
      },
    },
  ],
}];
