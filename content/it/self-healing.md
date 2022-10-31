---
title: Self Healing
status: Completed
category: Proprietà
tags: ["infrastruttura", "architettura", ""]
---

Un sistema self-healing (auto rigenerante) è capace di risolvere alcuni tipi di errore senza alcun intervento umano.
È caratterizzato da un loop di "convergenza" o "controllo" che osserva attivamente lo stato attuale del sistema e lo confronta con lo stato che l'operatore desiderava inizialmente.
Se riscontra una differenza (ad esempio sono in esecuzioni meno istanze di un'applicazione rispetto a quelle desiderate), intraprenderà delle azioni correttive (ad esempio creare nuove istanze).
