window.PROGRAMS = window.PROGRAMS || {};
window.PROGRAMS.crossfit = {
  name: "CrossFit",
  defaults: { start: null, weekdays: [] },
  days: [
    { n: 2, date: "2026-09-08", desc: "Heavy weight · Strong and Fast", ex: [
      {"tag": "A", "prep": true, "name": "WARMUP - 30s cada movimiento", "text": ["Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "B", "prep": true, "name": "GET WARM - 1 min work · 30\" rest", "text": ["KB DL 32 kg", "Back lunge", "KB swing ruso 20 kg", "Air bike"]},
      {"tag": "C", "prep": true, "name": "MOVILIDAD", "text": ["Hopper completo", "Deep squat", "Antebrazo y dorso de la mano"]},
      {"tag": "D", "name": "BARBELL WARM - Barra y 25 kg", "text": ["5 Power Clean", "5 Low Power Clean", "5 Hang Power Clean"], "oi": 0},
      {"tag": "E", "title": "Heavy weight · EMOM", "name": "POWER CLEAN + LOW POWER CLEAN + HANG POWER CLEAN", "pct": "70%/4x1+1+1, 80%/4x1+1+1, 90%/3x1+1+1, 95%/2x1+1+1", "notes": "Cada serie es un EMOM. Descanso: 2 min tras el 70 % y el 80 %, 3 min tras el 90 %.", "result": ["40-45-50-55 todo ok"], "oi": 1},
      {"tag": "F", "title": "WOD · Strong and Fast", "name": "FOR TIME - 10 rondas for time · TC 20 min", "text": ["4 D-ball clean 40kg", "10m HS walk (2 wall walks)", "200m run"], "result": ["7 rondas enteras y las 4 D-ball de la 8"], "oi": 2}
    ]},
    { n: 3, date: "2026-09-09", desc: "Strength gymnastic · Body weight 1", ex: [
      {"tag": "A", "prep": true, "name": "WARMUP - 30s cada movimiento", "text": ["Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "B", "prep": true, "name": "GET WARM - 1 min work · 30\" rest", "text": ["Plancha de manos", "Back lunge", "Hollow hold", "Air bike", "Hollow rock", "Row"]},
      {"tag": "C", "prep": true, "name": "MOVILIDAD", "text": ["Deep squat", "Piramidal", "Hang 1 min en anillas", "Ring floor activation 10reps", "Ring Row x 10reps difíciles", "Reverse Skin the Cat x 10reps"]},
      {"tag": "D", "title": "STREGTH GYMNASTIC", "name": "STRICT PULL UPS - E 2:30 MOM · 5 sets", "text": ["De 1 a 10 strict pull ups"], "result": ["5x2 rondas sin gomas", "3+2 el resto"], "oi": 0},
      {"tag": "E", "title": "WOD · Body weight 1", "name": "FOR TIME", "text": ["30 bar muscle up (15 C2B)", "60 V-ups", "75 cal Assault Bike"], "result": ["C2B 8+5+4 · T2B unbroken", "V-ups 15 + 10x3 + 5 el resto", "Bici unbroken", "Tiempo:16'20\""], "oi": 1}
    ]},
    { n: 4, date: "2026-09-14", desc: "ISO squats", ex: [
      {"tag": "A", "prep": true, "name": "WARMUP - 30 s cada movimiento", "text": ["Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "B", "prep": true, "name": "GET WARM - 1 min work · 30\" rest", "text": ["KB swing ruso 20 kg", "Back lunge", "KB swing ruso 20 kg", "Air bike", "KB swing ruso 20 kg", "Row"]},
      {"tag": "C", "prep": true, "name": "MOVILIDAD", "text": ["Deep Squat", "Hopper completo", "Sissy squats", "Cossack"]},
      {"tag": "D", "title": "ISO squats · E3MOM 5 sets", "name": "BACK SQUAT - Sube peso cada ronda; máximo peso y esfuerzo en la última", "text": ["5 back squats con pausa ISO de 5\""], "result": ["Todas las rondas con 40 kg"], "oi": 0},
      {"tag": "E", "title": "WOD · Dragon's leg", "name": "E3MOM 5 sets (18 min)", "text": ["30 wall ball 7 kg", "10 burpees"], "result": ["Me comí 15 wall balls de la cuarta ronda fui con 6kg"], "oi": 1}
    ]},
    { n: 5, date: "2026-09-15", desc: "Heavy weight deadlift · Gymnastic", ex: [
      {"tag": "A", "prep": true, "name": "WARMUP - 30 s cada movimiento", "text": ["Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "B", "prep": true, "name": "GET WARM - 1 min work · 30\" rest", "text": ["KB DL 32 kg", "Row", "KB swing ruso 20 kg", "Row", "KB swing ruso 20 kg"]},
      {"tag": "C", "prep": true, "name": "MOVILIDAD", "text": ["Hopper completo ", "Deep Squat"]},
      {"tag": "D", "name": "BARBELL WARM", "text": ["10 barbell DL", "Luego encuentra un peso para 3 reps con el que empezar"], "oi": 0},
      {"tag": "E", "title": "Heavy weight · EMOM", "name": "DEADLIFT TOUCH AND GO", "pct": "70%/5x3, 80%/4x3, 85%/2x3, 90%/2x3", "notes": "Primer bloque al 70-75 %. Descanso: 2 min tras el 70 % y el 80 %, 3 min tras el 85 %.", "result": ["75 ok · 85 ok · 90 ok", "95: 1 en cada ronda"], "oi": 1},
      {"tag": "F", "title": "Gymnastic · E2MOM 5 sets", "name": "RING MUSCLE UP", "text": ["Máximos ring muscle ups unbroken (máximos T2R + RPU unbroken)", "Después, 5 min para:", "10 legless rope climb (legless donde puedas y acabas con pies)"], "result": ["12x1 · 7x4", "Mitad de subidas legless y mitad con piernas"], "oi": 2}
    ]},
    { n: 6, date: "2026-09-16", desc: "Técnica power snatch · Fuerza resistencia", ex: [
      {"tag": "A", "prep": true, "name": "WARMUP - 30 s cada movimiento", "text": ["", "Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "B", "prep": true, "name": "GET WARM - 40/20 ON/OFF · 3 rondas", "text": ["Comba", "Row"]},
      {"tag": "C", "prep": true, "name": "MOVILIDAD", "text": ["Deep squat ", "Piramidal", "10 pass through", "10/10 sword", "10 OH band deep squat"]},
      {"tag": "D", "prep": true, "name": "CALENTAMIENTO CON BARRA", "text": ["Cuban Press", "Remo vertical", "Scott Press en sentadilla"]},
      {"tag": "E", "title": "3 sets", "name": "BARBELL WARM - Barra y subiendo peso", "text": ["3 power pull snatch", "3 power snatch", "3 low power snatch", "3 hang power snatch", "3 OH squat"], "oi": 0},
      {"tag": "F", "title": "TECHNIQUE · E 1:30 MOM 8 sets Sube hasta el máximo del día en las 8 series", "name": "POWER SNATCH + HANG POWER SNATCH + POWER SNATCH", "pct": "60%/1x1+1+1", "notes": "Si fallas, repites el peso anterior.", "result": ["Hasta 33 incluidos"], "oi": 1},
      {"tag": "G", "title": "WOD · Fuerza resistencia", "name": "AMRAP 15", "text": ["20 pull ups", "5 HSPU (pino con bajada en negativo)", "300m run (2 vueltas)"], "result": ["Cambiamos los 5 HSPU por 10 Z-press", "4 rondas completas, todo unbroken", "De la quinta los pull ups, 15+5"], "oi": 2}
    ]},
    { n: 7, date: "2026-09-21", desc: "Heavy weight clean & jerk · Fire time", ex: [
      {"tag": "A", "prep": true, "name": "WARMUP -30 s cada movimiento", "text": ["Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "B", "prep": true, "name": "GET WARM - 3 rondas · 40 s ON / 20 s OFF", "text": ["Comba (trabajamos skills, ninguna DU)", "Bike (suave, enfócate en empujar con los brazos)"]},
      {"tag": "C", "prep": true, "name": "MOVILIDAD", "text": ["Hopper completo ", "Deep squat", "Muñecas antebrazo y dorso de la mano"]},
      {"tag": "D", "name": "BARBELL WARM", "text": ["5 clean", "5 hang clean", "5 split jerk", "Barra y 25 kg"], "oi": 0},
      {"tag": "E", "title": "Heavy weight · EMOM", "name": "CLEAN + SPLIT JERK + HANG CLEAN + SPLIT JERK", "pct": "70%/4x1+1+1+1, 80%/3x1+1+1+1, 90%/2x1+1+1+1, 100%/2x1+1+1+1", "notes": "Descanso: 2 min tras el 70 %, 3 min tras el 80 % y el 90 %.", "result": ["36-41-46 (solo 1 ronda y bajé) - 41 ok"], "oi": 1},
      {"tag": "F", "title": "WOD · Fire time", "name": "AMRAP 12", "text": ["AMRAP 12 min", "15 front squats 30 kg", "30 DU"], "result": ["6 sentadillas de la 6. Front squats muy lentos, solo 1 ronda unbroken", "Dolor en un dedo del agarre"], "oi": 2}
    ]},
    { n: 8, date: "2026-09-22", desc: "Strength gymnastic 2 · Pinocho", ex: [
      {"tag": "A", "prep": true, "name": "WARMUP - 30 s cada movimiento", "text": ["Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "B", "prep": true, "name": "GET WARM -1 min work · 30\" rest", "text": ["Plancha de manos", "Back lunge", "Hollow hold", "Row", "Hollow rock", "Row"]},
      {"tag": "C", "prep": true, "name": "MOVILIDAD", "text": ["Piramidal", "Kb Cake", "Hang en anillas", "Ring floor activation", "Ring row", "Reverse skin the cat"]},
      {"tag": "D", "title": "Strength gymnastic 2", "name": "STRICT PULL UPS E 2:30 MOM · 5 sets - Intenta superar tu semana pasada", "text": ["De 1 a 6 strict pull ups"], "result": ["6 - 5 - 4 - 3+2 - 3+2"], "oi": 0},
      {"tag": "E", "title": "WOD", "name": "HANDSTAND", "text": ["EMOM 5 sets: Lanzamiento a la pared y aguantar 20\"", "Rest 3 min", "AMRAP 5 min: 1 wall climb bien hecho + 10 V-ups", "Rest 3 min", "5 sets de 30\" de hold de pino contra la pared"], "result": ["Ni un solo lanzamiento correcto", "5 rondas de AMRAP", "2 pinos de 7\" de hold"], "oi": 1}
    ]},
    { n: 9, date: "2026-09-23", desc: "Black Cross 1", ex: [
      {"tag": "A", "prep": true, "name": "WARMUP - 30 s cada movimiento", "text": ["Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "B", "prep": true, "name": "GET WARM - 1 min work · 30\" rest", "text": ["Plancha de manos", "Back lunge", "Hollow hold", "Air bike", "Hollow rock", "Row"]},
      {"tag": "C", "prep": true, "name": "MOVILIDAD", "text": ["Deep squat (últimos 30\" manos a las orejas, saca pecho)", "Piramidal ", "Kb Cake"]},
      {"tag": "D", "title": "WOD · Black Cross", "name": "FOR TIME", "text": ["3 rondas: 24 cal row + 30 push-ups", "Rest 3:00", "3 rondas: 24 cal bike + 20 toes-to-bar", "Rest 3:00", "3 rondas: 40 m D-ball carry 40 kg + 10 bar muscle-ups (C2B)"], "result": ["15 flexiones en plancha, el resto de rodillas", "T2B 20-15 + 5x2", "Todos los C2B, aunque partiendo", "Tiempo:42'30\""], "oi": 0}
    ]},
    { n: 10, date: "2026-09-24", desc: "Heavy weight power clean · Strong and Fast 1", ex: [
      {"tag": "A", "prep": true, "name": "WARMUP - 30 s cada movimiento", "text": ["Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "B", "prep": true, "name": "GET WARM  ", "text": ["KB DL 32 kg", "Back lunge", "KB swing ruso 20 kg", "Air bike", "KB swing USA 20 kg", "Row"]},
      {"tag": "C", "prep": true, "name": "MOVILIDAD", "text": ["Hopper completo ", "Deep squat", "Muñecas antebrazo y dorso de la mano"]},
      {"tag": "D", "name": "BARBELL WARM -Barra y 25 kg", "text": ["5 Power Clean", "5 Low Power Clean", "5 Hang Power Clean"], "oi": 0},
      {"tag": "E", "title": "Heavy weight · EMOM", "name": "POWER CLEAN + HANG POWER CLEAN", "pct": "70%/5x3+2, 80%/4x3+2, 85%/2x3+2, E2MOM 2 sets al máximo peso posible", "notes": "Descanso de 3 min entre bloques.", "result": ["42 - 48 - 51 (solo entró una ronda)"], "oi": 1},
      {"tag": "F", "title": "WOD · Strong and Fast", "name": "FOR TIME - 20 min para intentar 10 rondas", "text": ["10 DKB clean", "20m farmer carry", "30 DU"], "result": ["Clean 12kg (Ultima ronda con 16kg) Farmer 16kg Tiempo:18'17\""], "oi": 2}
    ]},
    { n: 11, date: "2026-09-28", desc: "Técnica snatch · Fuerza resistencia", ex: [
      {"tag": "A", "prep": true, "name": "WARMUP - 30 s cada movimiento", "text": ["Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "B", "prep": true, "name": "GET WARM - 40/20 ON/OFF", "text": ["Air squats", "Handstand hold (pared)", "OH band squats", "Back lunge"]},
      {"tag": "C", "prep": true, "name": "MOVILIDAD", "text": ["Deep squat (últimos 30\" rotamos la rodilla al centro y apoyamos en el suelo)", "Piramidal", "10 pass through", "10/10 sword", "Cuban press", "Snatch grip row", "Snatch grip sotts press"]},
      {"tag": "D", "title": "3 sets", "name": "BARBELL WARM - Barra y 25kg", "text": ["3 DL shrug snatch", "3 hang snatch", "3 OH squat", "3 snatch"], "oi": 0},
      {"tag": "E", "title": "Technique · E 1:30 MOM 8 sets", "name": "SNATCH + HANG SNATCH", "pct": "60%/1x2+1, Sube hasta el máximo del día en las 8 series", "notes": "2 snatch + 1 hang snatch. Si fallas, repites el peso anterior.", "result": ["25 todo el tiempo"], "oi": 1},
      {"tag": "F", "title": "WOD · Fuerza resistencia", "name": "AMRAP 10", "text": [ "10 OH squats 50 kg", "10 C2B"], "result": ["Entraron los OHS de la 4"], "oi": 2}
    ]},
    { n: 12, date: "2026-09-29", desc: "Strength gymnastic 2 · WOD", ex: [
      {"tag": "A", "prep": true, "name": "WARMUP - 30 s cada movimiento", "text": ["Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "B", "prep": true, "name": "GET WARM - 1 min work · 30\" rest", "text": ["Plancha de manos", "Back lunge", "Hollow hold", "Row", "Hollow rock", "Row"]},
      {"tag": "C", "prep": true, "name": "MOVILIDAD", "text": ["Piramidal", "kb Cake", "Hang en anillas", "Ring floor activation", "Ring row", "Reverse skin the cat"]},
      {"tag": "D", "title": "Strength gymnastic 2", "name": "STRICT PULL UPS - E 2:30 MOM · 5 sets - Intenta superar tu semana pasada", "text": ["De 1 a 6 strict pull ups"], "result": ["6 - 4+2 - 4+2 - 3+1 - 3+1"], "oi": 0},
      {"tag": "E", "title": "WOD", "name": "5 RONDAS - Time cap esperado 15-18 min", "text": ["10 burpees target", "400m run", "2 rope climb"], "result": ["3 Rondas con Run y 2 con Row por temporal. Tiempo:22'"], "oi": 1}
    ]},
    { n: 13, date: "2026-09-30", desc: "Pino & Death Lift 1", ex: [
      {"tag": "A", "prep": true, "name": "WARMUP - 30s cada movimiento", "text": ["Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "B", "prep": true, "name": "GET WARM - 1 min work · 30\" rest", "text": ["KB DL 32 kg", "Row", "KB swing ruso 20 kg", "Row", "KB swing ruso 20 kg"]},
      {"tag": "C", "prep": true, "name": "MOVILIDAD", "text": ["Hopper completo ", "Deep squat"]},
      {"tag": "D", "name": "BARBELL WARM", "text": ["10 barbell DL", "Luego encuentra un peso para 3 reps con el que empezar"], "oi": 0},
      {"tag": "D", "title": "WOD · Pino & Death Lift", "name": "FOR TIME", "text": ["21-15-9 deadlifts 60kg + HSPU (cajón)", "21-15-9 deadlifts 90kg + 15m handstand walk de los cuales 7,5 m unbroken (4 wall walks)"], "result": ["Pesos: 60kg, 80kg Tiempo: 23'29\""], "oi": 1}
    ]},
    { n: 14, date: "2026-10-06", desc: "Ring muscle ups · Rings and Cries", ex: [
      {"tag": "", "prep": true, "name": "WARMUP - 30s cada movimiento", "text": ["Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "B", "prep": true, "name": "GET WARM - 1 min work · 30\" rest", "text": ["Plancha de manos", "Back lunge", "Box jump (suave)", "Row", "Box jump (suave)", "Row"]},
      {"tag": "C", "prep": true, "name": "MOVILIDAD", "text": ["Piramidal", "Hang en anillas", "Ring floor activation", "Ring row", "Reverse skin the cat"]},
      {"tag": "D", "prep": true, "name": "BABY MUSCLE UPS", "text": ["4 reps para preparar el EMOM"]},
      {"tag": "E", "title": "EMOM 10", "name": "STRICT RING MUSCLE UP - EMOM 10 min", "text": ["3 strict ring muscle ups (desde el suelo para ganar fuerza)"], "oi": 0},
      {"tag": "F", "title": "WOD · Rings and Cries", "name": "FOR TIME 10 rondas", "text": ["3 ring muscle ups (3 Ring Pull ups + 3 Ring Dips)", "6 cal bike", "10 high box jumps"], "oi": 1}
    ]},
    { n: 15, date: "2026-10-07", desc: "Heavy weight clean · Thrusters y T2B", ex: [
      {"tag": "A", "prep": true, "name": "WARMUP - 30s cada movimiento", "text": ["Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "B", "prep": true, "name": "GET WARM - 1 min work · 30\" rest", "text": ["Row", "Dumbbell press (10 kg)", "Row", "KB deadlift 32 kg", "Air squats"]},
      {"tag": "C", "prep": true, "name": "MOVILIDAD", "text": ["Hip Twist", "Hopper completo", "Deep squat", "Muñecas antebrazo y dorso de la mano"]},
      {"tag": "D", "name": "BARBELL WARM - Barra y 30 kg", "text": ["5 hip power clean", "5 front squats", "5 hang clean"]},
      {"tag": "E", "title": "Heavy weight · EMOM", "name": "HIP CLEAN + HANG CLEAN + CLEAN", "pct": "70%/4x1+1+1, 80%/4x1+1+1, 90%/3x1+1+1, EMOM 2 sets al máximo peso (haz una extra si puedes sacar más)", "notes": "Descanso de 3 min entre bloques."},
      {"tag": "F", "title": "WOD", "name": "FOR TIME - 15-12-9", "text": ["Thruster 37 kg", "T2B"]}
    ]},
    { n: 16, date: "2026-10-09", desc: "Técnica power snatch · DB snatch y DU", ex: [
      {"tag": "A", "prep": true, "name": "WARMUP - 30s cada movimiento", "text": ["Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "B", "prep": true, "name": "GET WARM - 1 min work · 30\" rest", "text": ["Comba", "KB deadlift 32 kg", "Comba heavy", "Hang DB snatch 15 kg alterno", "Comba heavy"]},
      {"tag": "C", "prep": true, "name": "MOVILIDAD", "text": ["Piramidal ", "Recto femoral en la pared", "Pass through", "Sword", "OH band deep squat", "Cuban Press", "Remo vertical", "Scott Press en sentadilla"]},
      {"tag": "D", "title": "3 sets", "name": " BARBELL WARM - Barra y 25 kg", "text": ["3 power pull snatch", "3 power snatch", "3 hang power snatch"]},
      {"tag": "E", "title": "Technique · E 1:30 MOM 8 sets", "name": "POWER SNATCH + HANG POWER SNATCH", "pct": "60%/1x1+2, Sube hasta el máximo del día en las 8 series", "notes": "1 power snatch + 2 hang power snatch. Si fallas, repites el peso anterior."},
      {"tag": "F", "title": "WOD", "name": "AMRAP 10", "text": ["10 DB snatch 17,5 kg", "30 DU"]}
    ]},
    { n: 17, date: "2026-10-10", desc: "Strength gymnastic 2 · BMU, HSW y row", ex: [
      {"tag": "A", "prep": true, "name": "WARMUP - 30 s cada movimiento", "text": ["Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "B", "prep": true, "name": "GET WARM - 1 min work · 30\" rest", "text": [ "Plancha de manos", "Back lunge", "Hollow hold", "Row", "Hollow rock", "Row"]},
      {"tag": "C", "prep": true, "name": "MOVILIDAD", "text": ["Piramidal", "Kb Cake", "Hang en anillas", "Ring floor activation", "Ring row", "Reverse skin the cat"]},
      {"tag": "D", "title": "Strength gymnastic", "name": "CHEST TO BAR PULL UPS - E 2:30 MOM · 5 sets - Puedes soltarte. No tardes más de 45\"", "text": ["De 1 a 10 chest to bar pull ups"]},
      {"tag": "E", "title": "WOD", "name": "EMOM 4 SETS", "text": ["Máximos BMU unbroken (T2B)", "15 HSW (30S Hold Pino)", "12 cal row"]}
    ]},
    { n: 18, date: "2026-10-11", desc: "Heavy weight deadlift · Gymnastic", ex: [
      {"tag": "", "prep": true, "name": "WARMUP - 30 s cada movimiento", "text": ["Cruce brazos", "Arriba abajo alternos", "Forwards small jump", "Backwards big jump", "Touch and raise", "Jumping Jacks", "Walk in out", "Roll back", "Sit ups piernas estiradas", "Press dog"]},
      {"tag": "A", "prep": true, "name": "GET WARM - 1 min work · 30\" rest", "text": ["KB DL 32 kg", "Row", "KB swing ruso 20 kg", "Row", "KB swing ruso 20 kg"]},
      {"tag": "B", "prep": true, "name": "MOVILIDAD", "text": ["Hopper completo", "Deep squat"]},
      {"tag": "C", "name": "BARBELL WARM", "text": ["10 barbell DL", "Luego encuentra un peso para 5 reps con el que empezar"]},
      {"tag": "D", "title": "Heavy weight · EMOM", "name": "DEADLIFT", "pct": "70%/4x5, 75%/4x5, 80%/3x5, 85%/2x5", "notes": "5 DL de uno en uno: se sube y se baja controlado, pero reiniciando cada vez. Descanso de 3 min entre bloques."},
      {"tag": "E", "title": "Gymnastic · E2MOM 5 sets", "name": "ROPE CLIMB · BURPEES · FARMER", "text": ["1 rope climb", "10 burpees over DKB", "40m farmer carry double KB"]}
    ]}
  ]
};
