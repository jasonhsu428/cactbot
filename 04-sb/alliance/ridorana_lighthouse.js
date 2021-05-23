const mathDirection = (mathBaseValue, correctMath, output) => {
  if (!correctMath)
    return;
  if (mathBaseValue < 1 || mathBaseValue > 9) {
    console.error('Bad math: ' + mathBaseValue);
    return;
  }
  return [
    output.stayOut(),
    output.standIn1(),
    output.standIn2(),
    output.standIn3(),
    output.standIn4(),
  ][correctMath[mathBaseValue]];
};
const mathOutputStrings = {
  stayOut: {
    en: 'Stay out',
    de: 'Draußen stehen',
    fr: 'Restez dehors',
    ja: '入らない',
    cn: '远离',
    ko: '바깥에 있기',
  },
  standIn1: {
    en: 'Stand in 1',
    de: 'In 1 stehen',
    fr: 'Allez sur le 1',
    ja: '１を踏む',
    cn: '站在 1',
    ko: '답: 1',
  },
  standIn2: {
    en: 'Stand in 2',
    de: 'In 2 stehen',
    fr: 'Allez sur le 2',
    ja: '２を踏む',
    cn: '站在 2',
    ko: '답: 2',
  },
  standIn3: {
    en: 'Stand in 3',
    de: 'In 3 stehen',
    fr: 'Allez sur le 3',
    ja: '３を踏む',
    cn: '站在 3',
    ko: '답: 3',
  },
  standIn4: {
    en: 'Stand in 4',
    de: 'In 4 stehen',
    fr: 'Allez sur le 4',
    ja: '４を踏む',
    cn: '站在 4',
    ko: '답: 4',
  },
};
Options.Triggers.push({
  zoneId: ZoneId.TheRidoranaLighthouse,
  timelineFile: 'ridorana_lighthouse.txt',
  timelineTriggers: [
    {
      id: 'Ridorana Stone Breath',
      regex: /Stone Breath/,
      beforeSeconds: 7,
      response: Responses.getBehind(),
    },
  ],
  triggers: [
    {
      id: 'Ridorana Famfrit Tide Pode',
      netRegex: NetRegexes.startsUsing({ id: '2C3E', source: 'Famfrit, The Darkening Cloud' }),
      netRegexDe: NetRegexes.startsUsing({ id: '2C3E', source: 'Dunkelfürst Famfrit' }),
      netRegexFr: NetRegexes.startsUsing({ id: '2C3E', source: 'Famfrit Le Nuage Ténébreux' }),
      netRegexJa: NetRegexes.startsUsing({ id: '2C3E', source: '暗黒の雲ファムフリート' }),
      netRegexCn: NetRegexes.startsUsing({ id: '2C3E', source: '暗黑之云法姆弗里特' }),
      netRegexKo: NetRegexes.startsUsing({ id: '2C3E', source: '암흑의 구름 팜프리트' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Ridorana Famfrit Tsunami 1',
      netRegex: NetRegexes.startsUsing({ id: '2C50', source: 'Famfrit, The Darkening Cloud', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2C50', source: 'Dunkelfürst Famfrit', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2C50', source: 'Famfrit Le Nuage Ténébreux', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2C50', source: '暗黒の雲ファムフリート', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2C50', source: '暗黑之云法姆弗里特', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2C50', source: '암흑의 구름 팜프리트', capture: false }),
      delaySeconds: 4.5,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Look for Tsunami',
          de: 'Auf Krug achten',
          fr: 'Attention Tsunami',
          ja: '水瓶が向いてる方向から離れる',
          cn: '离开水瓶口方向',
          ko: '대해일 확인',
        },
      },
    },
    {
      id: 'Ridorana Famfrit Tsunami 2',
      netRegex: NetRegexes.startsUsing({ id: '2C50', source: 'Famfrit, The Darkening Cloud', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2C50', source: 'Dunkelfürst Famfrit', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2C50', source: 'Famfrit Le Nuage Ténébreux', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2C50', source: '暗黒の雲ファムフリート', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2C50', source: '暗黑之云法姆弗里特', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2C50', source: '암흑의 구름 팜프리트', capture: false }),
      delaySeconds: 16.5,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Look for Tsunami',
          de: 'Auf Krug achten',
          fr: 'Attention Tsunami',
          ja: '水瓶が向いてる方向から離れる',
          cn: '离开水瓶口方向',
          ko: '대해일 확인',
        },
      },
    },
    {
      id: 'Ridorana Famfrit Tsunami 3',
      netRegex: NetRegexes.startsUsing({ id: '2C50', source: 'Famfrit, The Darkening Cloud', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2C50', source: 'Dunkelfürst Famfrit', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2C50', source: 'Famfrit Le Nuage Ténébreux', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2C50', source: '暗黒の雲ファムフリート', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2C50', source: '暗黑之云法姆弗里特', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2C50', source: '암흑의 구름 팜프리트', capture: false }),
      delaySeconds: 28.5,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Look for Tsunami',
          de: 'Auf Krug achten',
          fr: 'Attention Tsunami',
          ja: '水瓶が向いてる方向から離れる',
          cn: '离开水瓶口方向',
          ko: '대해일 확인',
        },
      },
    },
    {
      id: 'Ridorana Famfrit Dark Cannonade',
      netRegex: NetRegexes.headMarker({ id: '0037' }),
      condition: Conditions.targetIsYou(),
      response: Responses.doritoStack(),
    },
    {
      id: 'Ridorana Famfrit Briny Cannonade',
      netRegex: NetRegexes.headMarker({ id: '008B' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Ridorana Famfrit Dark Rain',
      netRegex: NetRegexes.addedCombatant({ name: 'Dark Rain', capture: false }),
      netRegexDe: NetRegexes.addedCombatant({ name: 'Dunkler Regen', capture: false }),
      netRegexFr: NetRegexes.addedCombatant({ name: 'Sphère D\'Eau Ténébreuse', capture: false }),
      netRegexJa: NetRegexes.addedCombatant({ name: '暗黒の雨水', capture: false }),
      netRegexCn: NetRegexes.addedCombatant({ name: '暗黑雨水', capture: false }),
      netRegexKo: NetRegexes.addedCombatant({ name: '암흑의 빗물', capture: false }),
      suppressSeconds: 10,
      response: Responses.killAdds(),
    },
    {
      id: 'Ridorana Belias Fire',
      netRegex: NetRegexes.startsUsing({ id: '2CDB', source: 'Belias, The Gigas' }),
      netRegexDe: NetRegexes.startsUsing({ id: '2CDB', source: 'Dämonid Belias' }),
      netRegexFr: NetRegexes.startsUsing({ id: '2CDB', source: 'Bélias Le Titan' }),
      netRegexJa: NetRegexes.startsUsing({ id: '2CDB', source: '魔人ベリアス' }),
      netRegexCn: NetRegexes.startsUsing({ id: '2CDB', source: '魔人贝利亚斯' }),
      netRegexKo: NetRegexes.startsUsing({ id: '2CDB', source: '마인 벨리아스' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Ridorana Belias Time Eruption',
      netRegex: NetRegexes.startsUsing({ id: '2CDE', source: 'Belias, The Gigas', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2CDE', source: 'Dämonid Belias', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2CDE', source: 'Bélias Le Titan', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2CDE', source: '魔人ベリアス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2CDE', source: '魔人贝利亚斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2CDE', source: '마인 벨리아스', capture: false }),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Stand on Slow Clock',
          de: 'In der langsamen Uhr stehen',
          fr: 'Placez-vous sur une horloge lente',
          ja: '遅い時計で待機（早い方が爆発したらすぐ安置へ）',
          cn: '站慢速时钟等待',
          ko: '느린 시계 위로',
        },
      },
    },
    {
      // Burns effect.
      id: 'Ridorana Belias Hand of Time',
      netRegex: NetRegexes.gainsEffect({ effectId: '212' }),
      condition: Conditions.targetIsYou(),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Stretch Tether Outside',
          de: 'Verbindung nach außen strecken',
          fr: 'Lien vers l\'exterieur',
          ja: '線を伸ばして外に向ける',
          cn: '将连线朝外远离人群',
          ko: '줄 바깥으로 늘이기',
        },
      },
    },
    {
      id: 'Ridorana Belias Time Bomb',
      netRegex: NetRegexes.startsUsing({ id: '2CE6', source: 'Belias, The Gigas', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2CE6', source: 'Dämonid Belias', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2CE6', source: 'Bélias Le Titan', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2CE6', source: '魔人ベリアス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2CE6', source: '魔人贝利亚斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2CE6', source: '마인 벨리아스', capture: false }),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Stop Clocks',
          de: 'Uhrzeiger nach außen',
          fr: 'Arrêtez horloge',
          ja: '針を外に向ける',
          cn: '定时炸弹',
          ko: '시간 폭탄',
        },
      },
    },
    {
      id: 'Ridorana Belias Gigas',
      netRegex: NetRegexes.addedCombatant({ name: 'Gigas', capture: false }),
      netRegexDe: NetRegexes.addedCombatant({ name: 'Diener Von Belias', capture: false }),
      netRegexFr: NetRegexes.addedCombatant({ name: 'Serviteur De Bélias', capture: false }),
      netRegexJa: NetRegexes.addedCombatant({ name: '魔人兵', capture: false }),
      netRegexCn: NetRegexes.addedCombatant({ name: '魔人兵', capture: false }),
      netRegexKo: NetRegexes.addedCombatant({ name: '마인병', capture: false }),
      suppressSeconds: 10,
      response: Responses.killAdds(),
    },
    {
      id: 'Ridorana Construct Destroy',
      netRegex: NetRegexes.startsUsing({ id: ['2C5A', '2C71'], source: 'Construct 7' }),
      netRegexDe: NetRegexes.startsUsing({ id: ['2C5A', '2C71'], source: 'Automat Nr\\. 7' }),
      netRegexFr: NetRegexes.startsUsing({ id: ['2C5A', '2C71'], source: 'Bâtisseur N°7' }),
      netRegexJa: NetRegexes.startsUsing({ id: ['2C5A', '2C71'], source: '労働七号' }),
      netRegexCn: NetRegexes.startsUsing({ id: ['2C5A', '2C71'], source: '劳动七号' }),
      netRegexKo: NetRegexes.startsUsing({ id: ['2C5A', '2C71'], source: '노동 7호' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Ridorana Construct Accelerate Spread',
      netRegex: NetRegexes.headMarker({ id: '008A' }),
      condition: Conditions.targetIsYou(),
      preRun: (data) => {
        data.accelerateSpreadOnMe = true;
      },
      response: Responses.spread(),
    },
    {
      id: 'Ridorana Construct Accelerate Stack',
      netRegex: NetRegexes.headMarker({ id: '0064' }),
      condition: (data) => {
        return !data.accelerateSpreadOnMe;
      },
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Ridorana Construct Accelerate Cleanup',
      netRegex: NetRegexes.startsUsing({ id: '2C65', source: 'Construct 7', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2C65', source: 'Automat Nr\\. 7', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2C65', source: 'Bâtisseur N°7', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2C65', source: '労働七号', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2C65', source: '劳动七号', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2C65', source: '노동 7호', capture: false }),
      run: (data) => {
        delete data.accelerateSpreadOnMe;
      },
    },
    {
      id: 'Ridorana Construct Math Setup',
      netRegex: NetRegexes.startsUsing({ id: '2C6C', source: 'Construct 7', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2C6C', source: 'Automat Nr\\. 7', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2C6C', source: 'Bâtisseur N°7', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2C6C', source: '労働七号', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2C6C', source: '劳动七号', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2C6C', source: '노동 7호', capture: false }),
      run: (data) => {
        data.mathBaseValue = 0;
      },
    },
    {
      // Hp Penalty effect.
      id: 'Ridorana Construct Math HP Check 1',
      netRegex: NetRegexes.gainsEffect({ effectId: '615' }),
      condition: Conditions.targetIsYou(),
      preRun: (data) => {
        if (!data.mathBaseValue && data.currentHP > 0 && data.currentHP < 10)
          data.mathBaseValue = data.currentHP;
      },
    },
    {
      // Not 100% convinced that hp will have updated exactly when the hp penalty
      // trigger happens.  However, by t=1 second in testing, standing a circle
      // will apply.  So, hope for the best by testing at t=0.5 as well, but not
      // overwriting any results from t=0 if that was valid.
      id: 'Ridorana Construct Math HP Check 2',
      netRegex: NetRegexes.gainsEffect({ effectId: '615' }),
      condition: Conditions.targetIsYou(),
      preRun: (data) => {
        if (!data.mathBaseValue && data.currentHP > 0 && data.currentHP < 10)
          data.mathBaseValue = data.currentHP;
      },
      delaySeconds: 0.5,
    },
    {
      id: 'Ridorana Construct Divide By Five',
      netRegex: NetRegexes.startsUsing({ id: '2CCD', source: 'Construct 7', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2CCD', source: 'Automat Nr\\. 7', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2CCD', source: 'Bâtisseur N°7', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2CCD', source: '労働七号', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2CCD', source: '劳动七号', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2CCD', source: '노동 7호', capture: false }),
      alertText: (data, _matches, output) => {
        const correctMath = [-1, 4, 3, 2, 1, 0, 4, 3, 2, 1];
        return mathDirection(data.mathBaseValue, correctMath, output);
      },
      outputStrings: mathOutputStrings,
    },
    {
      id: 'Ridorana Construct Divide By Four',
      netRegex: NetRegexes.startsUsing({ id: '2CCC', source: 'Construct 7', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2CCC', source: 'Automat Nr\\. 7', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2CCC', source: 'Bâtisseur N°7', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2CCC', source: '労働七号', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2CCC', source: '劳动七号', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2CCC', source: '노동 7호', capture: false }),
      alertText: (data, _matches, output) => {
        const correctMath = [-1, 3, 2, 1, 0, 3, 2, 1, 0, 3];
        return mathDirection(data.mathBaseValue, correctMath, output);
      },
      outputStrings: mathOutputStrings,
    },
    {
      id: 'Ridorana Construct Divide By Three',
      netRegex: NetRegexes.startsUsing({ id: '2CCA', source: 'Construct 7', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2CCA', source: 'Automat Nr\\. 7', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2CCA', source: 'Bâtisseur N°7', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2CCA', source: '労働七号', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2CCA', source: '劳动七号', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2CCA', source: '노동 7호', capture: false }),
      alertText: (data, _matches, output) => {
        const correctMath = [-1, 2, 1, 0, 2, 1, 0, 2, 1, 0];
        return mathDirection(data.mathBaseValue, correctMath, output);
      },
      outputStrings: mathOutputStrings,
    },
    {
      id: 'Ridorana Construct Indivisible',
      netRegex: NetRegexes.startsUsing({ id: '2CCE', source: 'Construct 7', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2CCE', source: 'Automat Nr\\. 7', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2CCE', source: 'Bâtisseur N°7', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2CCE', source: '労働七号', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2CCE', source: '劳动七号', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2CCE', source: '노동 7호', capture: false }),
      alertText: (data, _matches, output) => {
        const correctMath = [-1, 1, 0, 0, 1, 0, 1, 0, 3, 2];
        return mathDirection(data.mathBaseValue, correctMath, output);
      },
      outputStrings: mathOutputStrings,
    },
    {
      id: 'Ridorana Construct Pulverize',
      netRegex: NetRegexes.startsUsing({ id: '2C61', source: 'Construct 7', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2C61', source: 'Automat Nr\\. 7', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2C61', source: 'Bâtisseur N°7', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2C61', source: '労働七号', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2C61', source: '劳动七号', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2C61', source: '노동 7호', capture: false }),
      // 16 yalms
      response: Responses.getOut(),
    },
    {
      id: 'Ridorana Construct Dispose',
      netRegex: NetRegexes.startsUsing({ id: ['2C5F', '2CE9'], source: 'Construct 7', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: ['2C5F', '2CE9'], source: 'Automat Nr\\. 7', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: ['2C5F', '2CE9'], source: 'Bâtisseur N°7', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: ['2C5F', '2CE9'], source: '労働七号', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: ['2C5F', '2CE9'], source: '劳动七号', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: ['2C5F', '2CE9'], source: '노동 7호', capture: false }),
      response: Responses.getBehind(),
    },
    {
      id: 'Ridorana Construct Acceleration Bomb',
      netRegex: NetRegexes.gainsEffect({ effectId: '568' }),
      condition: Conditions.targetIsYou(),
      delaySeconds: 2,
      response: Responses.stopEverything(),
    },
    {
      id: 'Ridorana Yiazmat Rake Buster',
      netRegex: NetRegexes.startsUsing({ id: '2D4E', source: 'Yiazmat' }),
      netRegexDe: NetRegexes.startsUsing({ id: '2D4E', source: 'Yiasmat' }),
      netRegexFr: NetRegexes.startsUsing({ id: '2D4E', source: 'Yiazmat' }),
      netRegexJa: NetRegexes.startsUsing({ id: '2D4E', source: '鬼龍ヤズマット' }),
      netRegexCn: NetRegexes.startsUsing({ id: '2D4E', source: '鬼龙雅兹玛特' }),
      netRegexKo: NetRegexes.startsUsing({ id: '2D4E', source: '귀룡 야즈마트' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Ridorana Yiazmat Rake Charge',
      netRegex: NetRegexes.startsUsing({ id: '2E32', source: 'Yiazmat', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2E32', source: 'Yiasmat', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2E32', source: 'Yiazmat', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2E32', source: '鬼龍ヤズマット', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2E32', source: '鬼龙雅兹玛特', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2E32', source: '귀룡 야즈마트', capture: false }),
      condition: (data) => {
        return data.role === 'tank';
      },
      response: Responses.awayFromFront(),
    },
    {
      id: 'Ridorana Yiazmat White Breath',
      netRegex: NetRegexes.startsUsing({ id: '2C31', source: 'Yiazmat', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2C31', source: 'Yiasmat', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2C31', source: 'Yiazmat', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2C31', source: '鬼龍ヤズマット', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2C31', source: '鬼龙雅兹玛特', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2C31', source: '귀룡 야즈마트', capture: false }),
      response: Responses.getUnder(),
    },
    {
      id: 'Ridorana Yiazmat Magnetic Negative',
      netRegex: NetRegexes.gainsEffect({ effectId: '60F' }),
      condition: Conditions.targetIsYou(),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Move to Postive',
          de: 'Ins Positive laufen',
          fr: 'Allez sur le plus',
          ja: 'プラス（＋）へ',
          cn: '移动到正极',
          ko: '+전하 쪽으로',
        },
      },
    },
    {
      id: 'Ridorana Yiazmat Magnetic Positive',
      netRegex: NetRegexes.gainsEffect({ effectId: '60E' }),
      condition: Conditions.targetIsYou(),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Move to Negative',
          de: 'Ins Negative laufen',
          fr: 'Allez sur le moins',
          ja: 'マイナス（－）へ',
          cn: '移动到负极',
          ko: '-전하 쪽으로',
        },
      },
    },
    {
      id: 'Ridorana Yiazmat Archaeodemon',
      netRegex: NetRegexes.addedCombatant({ name: 'Archaeodemon', capture: false }),
      netRegexDe: NetRegexes.addedCombatant({ name: 'Archaeodämon', capture: false }),
      netRegexFr: NetRegexes.addedCombatant({ name: 'Archéodémon', capture: false }),
      netRegexJa: NetRegexes.addedCombatant({ name: 'アルケオデーモン', capture: false }),
      netRegexCn: NetRegexes.addedCombatant({ name: '古恶魔', capture: false }),
      netRegexKo: NetRegexes.addedCombatant({ name: '원시 악마', capture: false }),
      suppressSeconds: 10,
      response: Responses.killAdds(),
    },
    {
      id: 'Ridorana Yiazmat Heart',
      netRegex: NetRegexes.addedCombatant({ name: 'Heart Of The Dragon', capture: false }),
      netRegexDe: NetRegexes.addedCombatant({ name: 'Herz Des Drachen', capture: false }),
      netRegexFr: NetRegexes.addedCombatant({ name: 'Cœur De Yiazmat', capture: false }),
      netRegexJa: NetRegexes.addedCombatant({ name: 'ヤズマットの心核', capture: false }),
      netRegexCn: NetRegexes.addedCombatant({ name: '鬼龙的核心', capture: false }),
      netRegexKo: NetRegexes.addedCombatant({ name: '야즈마트의 심핵', capture: false }),
      suppressSeconds: 10,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Kill Heart',
          de: 'Herz',
          fr: 'Tuer le cœur',
          ja: '心核を討つ',
          cn: '消灭boss核心',
          ko: '심핵 처리',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Archaeodemon': 'Archaeodämon',
        'Belias, The Gigas': 'Dämonid Belias',
        'Construct 7': 'Automat Nr\\. 7',
        'Dark Rain': 'Dunkler Regen',
        'Echoes from Time\'s Garden': 'Garten ewiger Zeit',
        'Famfrit, The Darkening Cloud': 'Dunkelfürst Famfrit',
        '(?<!Belias, The )Gigas': 'Diener von Belias',
        'Heart of the Dragon': 'Herz des Drachen',
        'The Cleft of Profaning Wind': 'Kluft entweihender Winde',
        'The Clockwork Coliseum': 'Kolosseum von Gog',
        'The Spire\'s Bounds': 'Katastase',
        'Yiazmat': 'Yiasmat',
      },
      'replaceText': {
        'Accelerate': 'Beschleunigen',
        'Annihilation Mode': 'Auslöschungsmodul',
        'Archaeodemon spawn': 'Archaeodämon erscheint',
        'Area Lockdown': 'Gebiet geschlossen',
        'Briny Cannonade': 'Aquarion',
        'Compress': 'Zerdrücken',
        'Computation Mode': 'Standardmodul',
        'Crimson Cyclone': 'Zinnober-Zyklon',
        '(?<! )Cyclone': 'Zyklon',
        'Dark Cannonade': 'Dunkler Blitz',
        'Dark Ewer': 'Dunkler Wasserkrug',
        'Dark Rain': 'Dunkler Regen',
        'Darkening Deluge': 'Düstere Flut',
        'Darkening Rainfall': 'Verdunkelnder Niederschlag',
        'Death Strike': 'Extonso Tod',
        'Destroy': 'Zerstören',
        'Dispose': 'Entsorgen',
        'Division': 'Division',
        'Dust Storm': 'Staubsturm',
        '(?<![\\w| ])Eruption': 'Eruption',
        'Fast Hands': 'Schnelle Hände',
        '(?<!\\w)Fire(?! )': 'Feuer',
        'Fire IV': 'Feuka',
        'Gale Gaol': 'Windgefängnis',
        'Gigas spawns': 'Gigas erscheint',
        'Growing Threat': 'Mirakel',
        'Gust Front': 'Böenfront',
        'Hellfire': 'Höllenfeuer',
        'Ignite': 'Entzünden',
        'Incinerate': 'Einäschern',
        'Karma': 'Lebensbruch',
        'Lithobrake': 'Erledigen',
        'Magnetic Genesis': 'Magnetische Stabilisierung',
        'Magnetic Lysis': 'Magnetische Auflösung',
        'Pulverize': 'Zermahlen',
        '(?<!\\w)Rake': 'Prankenhieb',
        'Slow Hands': 'Langsame Hände',
        'Solar Storm': 'Sonnensturm',
        'Stone Breath': 'Petri-Atem',
        'Subtract': 'Subtrahieren',
        'Summon': 'Beschwörung',
        'Tartarus Mode': 'Tartarus-Modul',
        'The Hand Of Time': 'Die Hand der Zeit',
        'Tide Pod': 'Gezeitenschlag',
        'Time Bomb': 'Zeitbombe',
        'Time Eruption': 'Zeiteruption',
        'Tsunami': 'Sturzflut',
        'Unholy Darkness': 'Unheiliges Dunkel',
        'Ventilate': 'Abkühlen',
        'Water IV': 'Giga-Aqua',
        'White Breath': 'Kalkatem',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Archaeodemon': 'archéodémon',
        'Belias, The Gigas': 'Bélias le Titan',
        'Construct 7': 'Bâtisseur n°7',
        'Dark Rain': 'Trombe d\'eau',
        'Echoes from Time\'s Garden': 'Jardin d\'un autre temps',
        'Famfrit, The Darkening Cloud': 'Famfrit le Nuage Ténébreux',
        '(?<! )Gigas': 'serviteur de Bélias',
        'Heart of the Dragon': 'cœur de Yiazmat',
        'The Cleft of Profaning Wind': 'la corniche des Vents distordants',
        'The Clockwork Coliseum': 'l\'arène de Goug',
        'The Spire\'s Bounds': 'l\'orée des Cieux',
        'Yiazmat': 'Yiazmat',
      },
      'replaceText': {
        'Accelerate': 'Aplatir',
        'Annihilation Mode': 'Module Exterminator',
        'Archaeodemon spawn': 'Apparition des Archéodémons',
        'Area Lockdown': 'Verrouillage de la zone',
        'Briny Cannonade': 'Aqua-canon',
        'Compress': 'Écraser',
        'Computation Mode': 'Module d\'arithmétique',
        'Crimson Cyclone': 'Cyclone écarlate',
        '(?<! )Cyclone': 'Cyclone',
        'Dark Cannonade': 'Bombardement ténébreux',
        'Dark Ewer': 'Aiguières ténèbreuses',
        'Dark Rain': 'Trombe d\'eau',
        'Darkening Deluge': 'Nuage stagnant',
        'Darkening Rainfall': 'Averse ténébreuse',
        'Death Strike': 'Pentacle mortel',
        'Destroy': 'Détruire',
        'Dispose': 'Annihiler',
        'Division': 'Division',
        'Dust Storm': 'Tempête de poussière',
        '(?<![\\w| ])Eruption': 'Éruption',
        'Fast Hands': 'Mains rapides',
        '(?<!\\w)Fire(?! )': 'Feu',
        'Fire IV': 'Giga Feu',
        'Gale Gaol': 'Prison de vent',
        'Gigas spawns': 'Apparition des serviteurs de Bélias',
        'Growing Threat': 'Exacerbation',
        'Gust Front': 'Front de rafales',
        'Hellfire': 'Flammes de l\'enfer',
        'Ignite': 'Carboniser',
        'Incinerate': 'Incinérer',
        'Karma': 'Souffrance',
        'Lithobrake': 'Percuter',
        'Magnetic Genesis': 'Stabilisation du champ magnétique',
        'Magnetic Lysis': 'Dérèglement magnétique',
        'Pulverize': 'Broyer',
        '(?<!\\w)Rake': 'Griffes',
        'Slow Hands': 'Mains lente',
        'Solar Storm': 'Tempête solaire',
        'Stone Breath': 'Souffle pétrifiant',
        'Subtract': 'Soustraire',
        'Summon': 'Invocation',
        'Tartarus Mode': 'Module Tartaros',
        'The Hand Of Time': 'Trotteuse de l\'au-delà',
        'Tide Pod': 'Frappe aqueuse',
        'Time Bomb': 'Bombe à retardement',
        'Time Eruption': 'Éruption à retardement',
        'Tsunami': 'Tsunami',
        'Unholy Darkness': 'Miracle sombre',
        'Ventilate': 'Réfrigérer',
        'Water IV': 'Giga eau',
        'White Breath': 'Souffle blanc',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Archaeodemon': 'アルケオデーモン',
        'Belias, The Gigas': '魔人ベリアス',
        'Construct 7': '労働七号',
        'Dark Rain': '暗雲の雨水',
        'Echoes from Time\'s Garden': 'はるかなる時の庭',
        'Famfrit, The Darkening Cloud': '暗黒の雲ファムフリート',
        '(?<! )Gigas': '魔人兵',
        'Heart of the Dragon': 'ヤズマットの心核',
        'The Cleft of Profaning Wind': '異なる風吹く白き戦場',
        'The Clockwork Coliseum': 'ゴーグ・コロセウム',
        'The Spire\'s Bounds': '至頂の封域',
        'Yiazmat': '鬼龍ヤズマット',
      },
      'replaceText': {
        '\\(close\\)': '(近い)',
        '\\(combo\\)': '(コンボ)',
        '\\(cross\\)': '(十字)',
        '\\(orbit\\)': '(曲線)',
        '\\(far\\)': '(遠い)',
        '\\(single\\)': '(一撃)',
        'Accelerate': '突貫する',
        'Annihilation Mode': 'ジェノサイドチップ',
        'Archaeodemon spawn': 'アルケオデーモン',
        'Area Lockdown': '領域封鎖',
        'Briny Cannonade': '蒼の砲撃',
        'Compress': '圧縮する',
        'Computation Mode': '算術チップ',
        'Crimson Cyclone': 'クリムゾンサイクロン',
        '(?<! )Cyclone': 'サイクロン',
        'Dark Cannonade': '闇の砲撃',
        'Dark Ewer': '暗雲の水瓶',
        'Dark Rain': '暗雲の雨水',
        'Darkening Deluge': '暗雲の淀み',
        'Darkening Rainfall': '暗雲の雨',
        'Death Strike': '必殺',
        'Destroy': '破壊する',
        'Dispose': '処理する',
        'Division': '算術',
        'Dust Storm': 'ダストストーム',
        '(?<![\\w| ])Eruption': 'エラプション',
        'Fast Hands': '早い手',
        '(?<!\\w)Fire(?! )': 'ファイア',
        'Fire IV': 'ファイジャ',
        'Gale Gaol': '風牢',
        'Gigas spawns': 'ギガス',
        'Growing Threat': '驚異',
        'Gust Front': 'ガストフロント',
        'Hellfire': '地獄の火炎',
        'Ignite': '放熱する',
        'Incinerate': '焼却する',
        'Karma': 'ライフブレイク',
        'Lithobrake': '落着する',
        'Magnetic Genesis': '磁場生成',
        'Magnetic Lysis': '磁場崩壊',
        'Pulverize': '粉砕する',
        '(?<!\\w)Rake': 'ひっかき',
        'Slow Hands': '遅い手',
        'Solar Storm': 'ソーラーストーム',
        'Stone Breath': 'ペトロブレス',
        'Subtract': '減算する',
        'Summon': '召喚',
        'Tartarus Mode': 'タルタロスチップ',
        'The Hand Of Time': '異界の時針',
        'Tide Pod': '水流弾',
        'Time Bomb': 'タイムボム',
        'Time Eruption': 'タイムエラプション',
        'Tsunami': '大海嘯',
        'Unholy Darkness': 'ダークホーリー',
        'Ventilate': '冷却する',
        'Water IV': 'ウォタジャ',
        'White Breath': 'ホワイトブレス',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Archaeodemon': '古恶魔',
        'Belias, The Gigas': '魔人贝利亚斯',
        'Construct 7': '劳动七号',
        'Dark Rain': '暗云雨水',
        'Echoes from Time\'s Garden': '悠久时光庭园',
        'Famfrit, The Darkening Cloud': '暗黑之云法姆弗里特',
        '(?<! )Gigas': '魔人兵',
        'Heart of the Dragon': '鬼龙的核心',
        'The Cleft of Profaning Wind': '吹拂异风的白色战场',
        'The Clockwork Coliseum': '高古斗技场',
        'The Spire\'s Bounds': '至顶封域',
        'Yiazmat': '鬼龙雅兹玛特',
      },
      'replaceText': {
        'Accelerate': '执行贯穿',
        'Annihilation Mode': '灭绝芯片',
        'Archaeodemon spawn': '古恶魔出现',
        'Area Lockdown': '区域封锁',
        'Briny Cannonade': '苍炮击',
        'Compress': '执行压缩',
        'Computation Mode': '算术芯片',
        'Crimson Cyclone': '深红旋风',
        '(?<! )Cyclone': '气旋',
        'Dark Cannonade': '暗炮击',
        'Dark Ewer': '暗云水瓶',
        'Dark Rain': '暗云雨水',
        'Darkening Deluge': '暗云沉淀',
        'Darkening Rainfall': '暗云之雨',
        'Death Strike': '必杀',
        'Destroy': '执行破坏',
        'Dispose': '执行清理',
        'Division': '除法',
        'Dust Storm': '尘暴',
        '(?<![\\w| ])Eruption': '地火喷发',
        'Fast Hands': '快手',
        '(?<!\\w)Fire(?! )': '火炎',
        'Fire IV': '炽炎',
        'Gale Gaol': '风牢',
        'Gigas spawns': '魔人兵出现',
        'Growing Threat': '惊异',
        'Gust Front': '飑风',
        'Hellfire': '地狱之火炎',
        'Ignite': '执行放热',
        'Incinerate': '执行焚烧',
        'Karma': '生命停止',
        'Lithobrake': '执行落地',
        'Magnetic Genesis': '磁场生成',
        'Magnetic Lysis': '磁场崩坏',
        'Pulverize': '执行粉碎',
        '(?<!\\w)Rake': '利爪',
        'Slow Hands': '慢手',
        'Solar Storm': '太阳风暴',
        'Stone Breath': '石化吐息',
        'Subtract': '执行减算',
        'Summon': '召唤',
        'Tartarus Mode': '冥狱芯片',
        'The Hand Of Time': '异界时针',
        'Tide Pod': '水流弹',
        'Time Bomb': '时空爆弹',
        'Time Eruption': '时空地火喷发',
        'Tsunami': '大海啸',
        'Unholy Darkness': '黑暗神圣',
        'Ventilate': '执行冷却',
        'Water IV': '骇水',
        'White Breath': '苍白吐息',
      },
    },
    {
      'locale': 'ko',
      'missingTranslations': true,
      'replaceSync': {
        'Archaeodemon': '원시 악마',
        'Belias, The Gigas': '마인 벨리아스',
        'Construct 7': '노동 7호',
        'Dark Rain': '암운의 빗물',
        'Echoes from Time\'s Garden': '아득한 시간의 정원',
        'Famfrit, The Darkening Cloud': '암흑의 구름 팜프리트',
        '(?<! )Gigas': '마인병',
        'Heart of the Dragon': '야즈마트의 심핵',
        'The Cleft of Profaning Wind': '다른 바람이 부는 하얀 전장',
        'The Clockwork Coliseum': '거그 투기장',
        'The Spire\'s Bounds': '정점의 봉인 영역',
        'Yiazmat': '귀룡 야즈마트',
      },
      'replaceText': {
        'Accelerate': '관통',
        'Annihilation Mode': '제노사이드 칩',
        'Archaeodemon spawn': '원시 악마 생성',
        'Area Lockdown': '지역 봉쇄',
        'Briny Cannonade': '푸른 포격',
        'Compress': '압축',
        'Computation Mode': '계산 칩',
        'Crimson Cyclone': '진홍 회오리',
        '(?<! )Cyclone': '회오리',
        'Dark Cannonade': '어둠의 포격',
        'Dark Ewer': '암운의 물병',
        'Dark Rain': '암운의 빗물',
        'Darkening Deluge': '암운의 웅덩이',
        'Darkening Rainfall': '암운의 비',
        'Death Strike': '필살',
        'Destroy': '파괴',
        'Dispose': '처리',
        'Division': '나눗셈',
        'Dust Storm': '먼지 폭풍',
        '(?<![\\w| ])Eruption': '용암 분출',
        'Fast Hands': '빠른 시계 터짐',
        '(?<!\\w)Fire(?! )': '파이어',
        'Fire IV': '파이쟈',
        'Gale Gaol': '바람 감옥',
        'Gigas spawns': '마인병 생성',
        'Growing Threat': '경이',
        'Gust Front': '돌풍전선',
        'Hellfire': '지옥의 화염',
        'Ignite': '열 방출',
        'Incinerate': '소각',
        'Karma': '생명 파괴',
        'Lithobrake': '착륙',
        'Magnetic Genesis': '자기장 생성',
        'Magnetic Lysis': '자기장 붕괴',
        'Pulverize': '분쇄',
        '(?<!\\w)Rake': '할퀴기',
        'Slow Hands': '느린 시계 터짐',
        'Solar Storm': '태양 폭풍',
        'Stone Breath': '석화 숨결',
        'Subtract': '뺄셈',
        'Summon': '소환',
        'Tartarus Mode': '타르타로스 칩',
        'The Hand Of Time': '이계의 시침',
        'Tide Pod': '물 탄환',
        'Time Bomb': '시간 폭탄',
        'Time Eruption': '시간의 불기둥',
        'Tsunami': '대해일',
        'Unholy Darkness': '다크 홀리',
        'Ventilate': '냉각',
        'Water IV': '워터쟈',
        'White Breath': '하얀 숨결',
        'cross': '지나감',
        'orbit': '떠있음',
        'close': '가까이',
        'far': '멀리',
        'combo': '콤보',
        'single': '1회',
      },
    },
  ],
});
