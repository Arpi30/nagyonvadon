import classes from "./aszf.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

export const Aszf = (props) => {
  return (
    <div className={classes.aszfModal}>
      <div className={classes.btn}>
        <button onClick={props.onConfirm}>X</button>
      </div>
      <h2>Általános Feltételek</h2>
      <h3>AMIT A JELENTKEZÉSI LAP KITÖLTÉSE ELŐTT TUDNOTOK KELL</h3>
      <div>
        <h4>Már jelentkezhettek a 2023-as Nagyon Vadon élménytáborba.</h4>
        <ul>
          <li>Jelentkkezési életkor 10-99</li>
          <li>bevezető ár 200€/személy</li>
          <li>Foglaló 30%</li>
          <li>Az ár tartalmazza a tábor idejére az utas biztosítást.</li>
        </ul>
        <p>
          Ha a szüleiddel eldöntöttétek, hogy jelentkeztek TÁBOROZÓKNAK
          jelentkezési lapot kell kitölteniük. A jelentkezési lapot minden
          esetben a szülő tölti ki. A jelentkezési lapon a saját adatai mellet,
          a megjegyzés rovatba minden további résztvevő (gyermekek, házastárs
          stb.) személyes adatát adja meg. A kitöltés előtt kötelező
          végigolvasni és egyetértés esetén elfogadni
        </p>
      </div>
      <div>
        <h4>INFORMÁCIÓK, SZABÁLYZAT, HÁZIREND</h4>
        <p>
          A táborozás zavartalansága és biztonsága érdekében a tábor lakói
          (bentlakók) elfogadják a Nagyon Vadon szabályzatát.
        </p>
        <h4>A KÖVETKEZŐK MINDEN TÁBORLAKÓRA, ÍGY RÁD IS VONATKOZNAK:</h4>
        <p>
          A TÁBORLAKÓ által közölt jelentkezésilap-adatok megfelelnek a
          valóságnak. A kitöltésnél nem maradt ki, vagy került elhallgatásra
          olyan információ, amely a táborlakót vagy a táborszervezőket bármilyen
          értelemben hátrányos vagy megoldhatatlan helyzet elé állítja. A
          táborlakó rendelkezik érvényes betegbiztosítással.
        </p>
        <p>
          A táborlakó tudomásul veszi, hogy a Nagyon Vadon-személyzet semmilyen
          balesetért nem felelős, amennyiben az a táborlakó hibájából (a
          közreadott, illetve köztudott szabályok figyelmen kívül hagyásával
          stb.), a megszokott és elfogadott gyakorlat szerint nyújtott szakszerű
          felügyelet és körülmények mellett történik. A táborlakó kötelessége
          azonnal jelezni bármely veszélyesnek tűnő vagy veszélyes helyzetet
          vagy veszélyeztetett állapotot (balesetet, tűzesetet stb., annak
          gyanúját vagy a megelőzés érdekében a megvalósulás lehetőségét) a
          legközelebbi nagykorú táboroztatónak. A táborlakó vállalja, hogy részt
          vesz a témafoglalkozásokon és ezeken fegyelmezett magatartással
          elősegíteni az oktatás sikerét. Érvényes nyilatkozat nélkül nincs
          táborozás. A táborlakó az egyértelműen általa okozott károkért
          felelősséget vállal. A táborlakó a jelentkezési lap kitöltésével
          hozzájárult ahhoz, hogy a lapon szereplő információkat és adatokat –
          kizárólag a táborszervezéshez és a táborozáshoz – kommunikációra,
          kapcsolattartásra, tájékoztatásra és azonosításra használják. A
          táborlakó hozzájárul, hogy a Nagyon Vadon(a szerzői jogról szóló
          törvény alapján) a táborban készült bármely felvételt vagy szellemi
          terméket (fénykép, videó, hang, szöveg stb.) a saját tulajdonának
          tekintsen és szabadon felhasználjon.
        </p>
        <h4>SZEMÉLYI ADATOK</h4>
        <p>
          A jelentkezési lapon a személyi adatokon csak mi tudunk módosítani. Ha
          bármivel kiegészítenéd őket, kérjük, küldd e-mailben vagy diktáld be
          telefonon, mi megtesszük helyetted!
        </p>
        <h4>TÁBOR, PROGRAMOK MINDEN NAP</h4>
        <p>
          A választott témád szerinti elfoglaltságok 9:00-kor kezdődnek és
          20:00-kor érnek véget. A szakprogramokon fejlesztheted a képességeidet
          10–15 fős foglalkozáson. Délelőtt és délutánonként számtalan
          programot, esténként pedig általában egy-egy nagy, egyszerre
          mindenkinek szóló eseményt szervezünk. Takarodó 22:00-kor.
        </p>
        <h4>NAPIREND PÉNTEKTŐL -VASÁRNAPIG</h4>
        <ul>
          <li>07:30–09:00 ÉRKEZÉS , reggeli, csapatok kialakítása</li>
          <li>
            09:00–10:00 Felszerelés megismerése. (
            térkép,iránytű,szikrakő,sátor,stb)
          </li>
          <li>10:00–10:30 Gomba alap ismeretek</li>
          <li>10:30–11:30 Gombás étel készítés (Csak ellenőrzött forrásból)</li>
          <li>11:30–12:00 Szünet, felkészülés a madár mégfigyelésre</li>
          <li>
            12:00–15:30 Madár megfigyelés, természet ismeret, gomba keresés
          </li>
          <li>
            15:30–18:00 Madár odu készítés, tüzifa előkészítés, tűzrakó hely
            kialakítás
          </li>
          <li>18:00–20:00 Vacsora készítés</li>
          <li>20:00–22:00 Esti program, csapda készítés</li>
          <li>22:00–23.00 Takarodó</li>
        </ul>
        <ul>
          <li>07:30–08:00 Ébresztő</li>
          <li>08:00–08:15 Csapdák ellenőrzése</li>
          <li>08:15–10:30 Gomba, (fácán,fürj) reggeli készítés</li>
          <li>
            10:30–11:30 A vadon élő állatoknak, mint alapvető természeti
            forrásoknak a tisztelete
          </li>
          <li>11:30–12:00 A vad mint élőlény tisztelete</li>
          <li>12:00–15:30 Bográcsozás</li>
          <li>
            15:30–18:00 Íjászkodás, trófea bemutató, vadászkürt
            megszólaltatásának elsajátítása
          </li>
          <li>18:00–20:00 Vacsora készítés</li>
          <li>
            20:00–22:00 Esti program, madár megfigyelés, a természet más
            használóinak,vagy hasznosítóinak tisztelete, vadorzás és annak
            felszámolása
          </li>
          <li>22:00–23.00 Takarodó</li>
        </ul>
        <ul>
          <li>07:30–08:30 Ébresztő, reggeli</li>
          <li>08:00–10:00 Költözés a halastóhoz </li>
          <li>
            10:00–10:30 Horgászati alapismeretek elsajátítása: horog kötés,
            szerelék kötés elsajátítása{" "}
          </li>
          <li>10:30–11:30 Etetési technikák</li>
          <li>11:30–12:00 Ebédre roston sült hal készítése</li>
          <li>
            13:30–15:30 Madár megfigyelés, természet ismeret, gomba keresés
          </li>
          <li>
            13:00–18:00 Horgász technikai megmérkőzés, halászlé elkészítésének
            elsajátítása{" "}
          </li>
          <li>18:00–20:00 Vacsora készítés</li>
          <li>
            20:00–22:00 Esti program, horgászat etikai ismeretei, halgazdaságok
            szerepei.
          </li>
          <li>22:00–23.00 Takarodó</li>
        </ul>
        <ul>
          <li>07:30–08:30 Ébresztő, reggeli</li>
          <li>08:00–10:00 Tábor zárás </li>
        </ul>
        <h4>ÉTKEZTETÉS</h4>
        <p>
          Reggeli, ebéd, vacsora. Három hivatalos tábori étkezést említünk, ám
          állandóan lehet kérni, fogyasztani: jóval több reggelit szállítunk,
          mint amennyire szükségünk van ébredés után, így annak, aki közben
          megéhezik, akár többször is jut tízórai ebédig; délután néha
          egyszerűen nekiállunk szendvicset gyártani. Kérjük a nagymamákat, hogy
          ne csomagoljanak házi kosztot, mert áll ugyan hűtőszekrény a szobában,
          ám a gyerekek nem kezelik a saját készleteiket. A csipszet és egyéb
          őrültségeket sem – azokkal jobb híján teleszórják egymás ágyát… Aki
          éhes, mondja, repetát is lehet kérni. Ha valaki elégedetlen, mondja
          meg! Úgy nehéz, ha nem tudjuk, mi kell.
        </p>
        <h4>KOMMUNIKÁCIÓ</h4>
        <p>
          Nem csak az élelmezésre igaz a következő: ha gondod van, mondd, mert
          ha nem szólsz, talán nem vesszük észre! A táborlakónak tudnia kell
          magyarul a zökkenőmentes mindennapi kommunikáció érdekében. A tábor
          nyelve a magyar.
        </p>
        <h4>SZEMÉT</h4>
        <p>
          A szobádban szigorúan tilos élelmiszert vagy – a kulacsod tartalmán,
          illetve az otthonról hozotton kívül – italt fogyasztani, ezért minden
          fogyasztást megpróbálunk a legfőbb tábori közösségi tér környékére
          korlátozni. Ezzel megakadályozzuk rengeteg hulladék felhalmozódását
          is. Szelektív hulladékkezelést végzünk minden táborlakó
          közreműködésével. Nem használunk tömegével eldobható eszközöket,
          zömével visszaváltható üveges italokat iszunk, szétválogatjuk és
          összegyűjtjük, amit lehet. Segíts te is! Eszedbe ne jusson például
          kihajítani a visszaváltható üvegeket! Hozzátesszük, de nyilván
          magadtól is tudod: ez nem a betétdíjról, hanem a józanészről szól.
        </p>
      </div>
      <h4>ÉRZÉKENYSÉG</h4>
      <p>
        Akinek különleges egészségügyi vagy étkezéssel kapcsolatos kívánsága
        van, jelezze az érkezésnél is! Ezeket az információkat közölheted
        e-mailben is utólag, ha elfelejtetted volna ráírni a jelentkezési
        lapodra.
      </p>
      <h4>KÖLTSÉGEK, RÉSZVÉTELI DÍJ, FIZETÉS</h4>
      <p>
        A táborozás alapdíja 200€/személy. Foglaló 30%. Az ár tartalmazza a
        tábor idejére az utas biztosítást. A fizetési módok, a részletek itt
        találhatóak:{" "}
      </p>
      <p>
        Amíg van hely, jelentkezhetsz. Ugyan nem szabunk határidőt, ám a cél,
        hogy a regisztráció és a foglaló befizetés egymás után történjen, hogy a
        kötelezettségeinket – pl. utas biztosítás – teljesíthessük. A
        vállalásainkkal nem kívánunk elmaradni. Az a szokás alakult ki, hogy a
        jelentkezési lap nyugtázása után (e-mailes visszajelzés tőlünk) utalnak
        a támogatók, előlegfizetéssel az összegek EGYBEN is folyósíthatók, a
        lehető legkevesebb készpénzt kívánunk kezelni.
      </p>
      <h4>CÉGES LEBONYOLÍTÁS</h4>
      <p>
        Ha vállalati szervezésben érkezett a jelentkezésed, a céggel egyeztetett
        részletek és a munkahelyen kapott információk szerint kell eljárni.
        Különleges kérés vagy kérdés esetén egyeztessünk, és találunk megoldást.
      </p>
      <h4>HOZZ MAGADDAL</h4>
      <p>
        Hátizsák, hálózsák, túracipő, sátor, étkészlet, fogkefe, törülköző,
        higiéniai dolgok, papucs, réteges ruházat, zokni, kulacs.
      </p>
      <h4>ELENGEDHETETLEN</h4>
      <ul>
        <li>a TAJ kártyád fénymásolata</li>
        <li>utas biztosítás, ha van ilyened (biztosítunk)</li>
        <li>megfelelő számú alsónemű, zokni</li>
        <li>kényelmes ruhák – mintha nyaralni mennél </li>
        <li>rövidnadrágok vagy szoknyák</li>
        <li>
          legalább egy hosszú nadrág és meleg pulóver (az esti programokra is
          gondolva)– kulacs
        </li>
        <li>valamilyen jelzés, amiről felismered a kulacsodat</li>
        <li>törülközők: egy a tisztálkodáshoz </li>
        <li>sapka és naptej a kánikula miatt</li>
      </ul>
      <h4>TÁBORBAN LAKNI, JELEN LENNI</h4>
      <p>
        A tábor területén csak a regisztrált táborozók és az alapítvány
        munkatársai, illetve meghívott vendégei tartózkodhatnak. A
        szobabeosztást (a táborozók kérései alapján) a Nagyon Vadon határozza
        meg
      </p>
      <h4>ÉRTÉK, FELELŐSSÉG</h4>
      <p>
        Ha nekünk adod, nálunk van… Akkor viszont minek hoztad, nem igaz? Ha van
        mobilod, horgászbotod vagy nyilad ne hagyd otthon, ha azzal vagy nyerő!
        Nem biztatunk, hogy így vagy úgy csináld, és nem tiltunk semmit, ám
        minden a SAJÁT felelősségedre lesz nálad. A Nagyon Vadon TEAM nem vállal
        felelősséget érték(tárgy)ért (okostelefon, pénz, ékszer, óra) A gyerekek
        okozhatnak azonban olyan károkat, amelyek nem írhatók a kísérők
        számlájára. Az ilyen jellegű károkért a károkozó felel. A károk helyben
        térítendők készpénzben vagy azonnali utalással.
      </p>
      <h4>SZOBA-, HELYISÉG- ÉS KÖRLETREND</h4>
      <p>
        A Nagyon Vadon és a kollégium munkatársai hivatalos ügyben (takarítás,
        karbantartás, napi ellenőrzés) a lakók távollétében is bemehetnek a
        szobákba. A szekrények és fiókok, a személyes tárgyak ellenőrzése
        azonban csak indokolt esetben lehetséges. A lakószoba és a szobához
        tartozó helyiségek rendjéért, tisztaságáért, az ott telepített eszközök,
        bútorzat és berendezések rendeltetésszerű használatáért a lakók
        egyénileg és egyetemlegesen felelnek. A rendeltetésszerű használathoz
        tartozik, hogy a lakószobákban élelmiszert és edényeket tárolni,
        valamint étkezni szigorúan tilos. A lakószoba bútorzatát megváltoztatni,
        átrendezni, az ágyakat egymás mellé tolni vagy a szekrényeket áthelyezni
        szigorúan tilos. A falakra, bútorokra, berendezési tárgyakra, ajtókra,
        ablakokra, beleértve ezek külső oldalait is, dekorációt szögelni,
        ragasztani tilos. A lakószobák és a hozzájuk tartozó fürdők és a WC-k
        takarítását a kollégium dolgozói rendszeresen végzik. A padlózat
        naponkénti söprése, a felmosás, a lakóegységekben közösen használt
        helyiségek, a hűtőgép tisztán tartása, szeméttárló edények szükség
        szerinti ürítése azonban a lakók feladata. A tábor különböző, közös
        használatú helyiségeit a tábor lakói felügyelettel használhatják,
        használatuk rendjére a fent említett szabályok vonatkoznak. A szobákban,
        a kollégium bármely helyiségében és a kollégiumi ingatlan egész
        területén tilos hobbiállatot tartani, egészségre ártalmas anyagokat
        tárolni, balesetveszélyes tevékenységet folytatni. Minden táborlakó
        kötelessége ügyelni a közös helyiségek és a táborhelyszín teljes
        területének tisztaságára és higiéniájára, illetve a táborlakók és a
        vagyonbiztonság érdekében hozott szabályok betartására és betartatására.
        Minden táborlakó köteles megőrizni és az előírásoknak megfelelően
        kezelni a táborhelyszín létesítményeit, felszereléseit, a
        témafoglalkozások, illetve a szabadidős tevékenység során alkalmazott
        eszközöket, használati és értéktárgyakat.
      </p>
      <h4>EGÉSZSÉGRE, TESTI ÉPSÉGRE VESZÉLYES ANYAG, ESZKÖZ</h4>
      <p>
        Tilos cigarettát, bármely dohányterméket, alkoholt vagy egyéb –
        kiskorúak vagy mindenki számára – tiltott eszközt vagy szert a táborba
        hozni, tartani vagy felhasználni (ide értve minden, a dohányzást
        helyettesítő vagy a dohányzás élményéhez hasonló érzést előidéző eszközt
        is) abban az esetben is, ha az adott eszközt a jogszabályok nem
        nevesítik vagy tiltják. Ide tartoznak az elektromos cigaretták és más –
        új generációs – termékek, illetve a legálisan kapható, de nem
        rendeltetésszerű használatukkal bódultságot vagy felfokozott állapotot
        generáló szerek vagy eszközök is. A tilalmazott tárgyat vagy anyagot a
        táborlakótól elvesszük és – amennyiben ezt a jogszabály engedi – a
        gondviselőjének a turnus befejeztével kérésre átadjuk, egyebekben
        megsemmisítjük. A táborlakó nem tarthat magánál olyan – akár vényre,
        akár vény nélkül kapható – gyógyszert, amelyről a táborlakó gondviselője
        legkésőbb az érkezéskor nem tájékoztatta a táborvezetést. Mivel
        tisztességesen végig olvastad a tábor szabályzatát, a megjegyzésekbe írd
        bele: „Nagyon Vadon első élménytáborom”. így jogosult vagy egy barátod
        meghívni tíz százalék kedvezménnyel. És a barátod következő alkalommal
        hasonlóan meglephet téged. A táborlakónak tilos az engedéllyel magánál
        tartott gyógyszert mással megosztani. A táborvezetésnek lehetősége van
        megtiltani, hogy a táborlakó egyes gyógyszereket magánál tartson;
        ilyenkor ezeket az orvosi szobában tároljuk, alkalmazásuk kizárólag
        orvosi felügyelettel történhet. Tilos a táborba hozni bármilyen, az
        életre, az egészségre, a testi épségre veszélyes – valamint tűzgyújtásra
        alkalmas – tárgyat, eszközt vagy anyagot.
      </p>
      <h4>BIZTONSÁG, MAGATARTÁS, VISELET</h4>
      <p>
        A tábor területét vagy takarodó után a lakóépületet tilos elhagyni a
        táborvezető jóváhagyása nélkül. Tilos a táborvezető vagy a csoportvezető
        utasításait szándékosan megszegni. Tilos bármely táborlakó testi vagy
        lelki épségét veszélyeztetni. A másik ember méltóságának, testi
        épségének megsértése súlyos vétség, és kivétel nélkül következményekkel
        jár. Tilos a táborlakókat a tanulásban, a szórakozásban vagy a
        pihenésben szándékosan hátráltatni. Tilos másokra nézve sértő
        kifejezést, ábrát tartalmazó vagy a jellegéből adódóan gyerektáborba nem
        való, illetve kihívó ruházatot viselni.
      </p>
      <h4>VÉGÜL</h4>
      <p>
        Rengeteg az információ, de ha mindent közölni akarunk, akkor… mindent
        közölnünk is kell. E-mailt írni gyakran egyszerűbb, mint telefonálni, ám
        van, amit praktikusabb szóban kifejteni, mert azonnal vissza lehet
        kérdezni, ha szükséges. Keressetek bennünket!
      </p>
      <h4>ZÁRÁSKÉNT</h4>
      <p>
        A táborlakó tisztában van a Nagyon Vadon honlapján közreadott
        információkkal, végigolvasta őket, a nem egyértelműnek tűnő részletekre
        rákérdezett, mindenre választ kapott.
      </p>
      <div className={classes.btnBottom}>
        <button onClick={props.onConfirm}>Bezárás</button>
        <button onClick={props.onClick}>Elfogadom</button>
      </div>
    </div>
  );
};

export const AszfModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} onClick={props.onClick} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Aszf onConfirm={props.onConfirm} onClick={props.onClick} />,
        document.getElementById("aszf")
      )}
    </>
  );
};
