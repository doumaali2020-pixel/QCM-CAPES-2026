
const questions = [{"q": "Le plan est rapporté à un repère orthonormé direct. Si \\(z\\) est un nombre complexe d’argument \\(\\theta\\), alors un argument du nombre complexe\n\\[\n\\frac{\\sqrt3-i}{\\overline z}\n\\]\nest :", "choices": ["\\(-\\theta-\\frac{\\pi}{6}\\)", "\\(\\theta-\\frac{\\pi}{6}\\)", "\\(-\\theta-\\frac{\\pi}{3}\\)", "\\(\\theta-\\frac{\\pi}{3}\\)"], "answer": 1, "corr": "On écrit\n\\[\n\\sqrt3-i=2\\left(\\cos\\left(-\\frac{\\pi}{6}\\right)+i\\sin\\left(-\\frac{\\pi}{6}\\right)\\right),\n\\]\ndonc \\(\\arg(\\sqrt3-i)\\equiv-\\frac{\\pi}{6}\\pmod{2\\pi}\\).\nComme \\(\\arg(\\overline z)\\equiv-\\theta\\pmod{2\\pi}\\),\n\\[\n\\arg\\left(\\frac{\\sqrt3-i}{\\overline z}\\right)\n\\equiv -\\frac{\\pi}{6}-(-\\theta)\n=\\theta-\\frac{\\pi}{6}\\pmod{2\\pi}.\n\\]\nLa bonne réponse est donc \\(\\boxed{B}\\)."}, {"q": "Le nombre complexe\n\\[\ne^{i\\pi/3}-e^{-i\\pi/3}\n\\]\nest égal à :", "choices": ["\\(2\\sqrt3\\,i\\)", "\\(-2\\sqrt3\\,i\\)", "\\(\\sqrt3\\,i\\)", "\\(-\\sqrt3\\,i\\)"], "answer": 2, "corr": "On utilise\n\\[\ne^{i\\alpha}-e^{-i\\alpha}=2i\\sin\\alpha.\n\\]\nAvec \\(\\alpha=\\frac{\\pi}{3}\\),\n\\[\ne^{i\\pi/3}-e^{-i\\pi/3}\n=2i\\sin\\frac{\\pi}{3}\n=2i\\cdot\\frac{\\sqrt3}{2}\n=\\sqrt3\\,i.\n\\]\nDonc \\(\\boxed{C}\\)."}, {"q": "Le plan est rapporté à un repère orthonormé direct. Si \\(z'\\) et \\(z''\\) sont les solutions dans \\(\\mathbb C\\) de\n\\[\nz^2+iz-1=0,\n\\]\nalors :", "choices": ["\\(\\arg z'+\\arg z''\\equiv\\frac{\\pi}{2}\\ [2\\pi]\\)", "\\(\\arg z'+\\arg z''\\equiv-\\frac{\\pi}{2}\\ [2\\pi]\\)", "\\(\\arg z'+\\arg z''\\equiv0\\ [2\\pi]\\)", "\\(\\arg z'+\\arg z''\\equiv\\pi\\ [2\\pi]\\)"], "answer": 3, "corr": "Par les relations de Viète,\n\\[\nz'z''=\\frac{-1}{1}=-1.\n\\]\nAlors\n\\[\n\\arg(z'z'')\\equiv\\arg z'+\\arg z''\\pmod{2\\pi}.\n\\]\nOr \\(\\arg(-1)\\equiv\\pi\\pmod{2\\pi}\\). Ainsi\n\\[\n\\arg z'+\\arg z''\\equiv\\pi\\ [2\\pi].\n\\]\nDonc \\(\\boxed{D}\\)."}, {"q": "Soit \\(n\\) un entier.\n\\[\n(1+i\\sqrt3)^n=(\\sqrt3+i)^n\n\\]\néquivaut à :", "choices": ["\\(n=2k,\\ k\\in\\mathbb Z\\)", "\\(n=6k,\\ k\\in\\mathbb Z\\)", "\\(n=12k,\\ k\\in\\mathbb Z\\)", "\\(n=24k,\\ k\\in\\mathbb Z\\)"], "answer": 2, "corr": "On a\n\\[\n1+i\\sqrt3=2e^{i\\pi/3},\\qquad \\sqrt3+i=2e^{i\\pi/6}.\n\\]\nLes modules sont identiques. Il faut donc\n\\[\ne^{in\\pi/3}=e^{in\\pi/6},\n\\]\nsoit\n\\[\ne^{in\\pi/6}=1.\n\\]\nAinsi\n\\[\n\\frac{n\\pi}{6}=2k\\pi\\quad\\Longleftrightarrow\\quad n=12k.\n\\]\nDonc \\(\\boxed{C}\\)."}, {"q": "Le plan est rapporté à un repère orthonormé direct. L’ensemble des points \\(M\\) d’affixe \\(z\\) tel que\n\\[\n\\left|\\frac{z-i}{z+1}\\right|=1\n\\]\nest :", "choices": ["un cercle", "un cercle privé d’un point", "une droite", "une droite privée d’un point"], "answer": 2, "corr": "L’égalité équivaut à\n\\[\n|z-i|=|z+1|.\n\\]\nSi \\(A\\) a pour affixe \\(i\\) et \\(B\\) a pour affixe \\(-1\\), cela signifie\n\\[\nMA=MB.\n\\]\nL’ensemble des points équidistants de deux points distincts est la médiatrice de \\([AB]\\), donc une droite. Le point \\(z=-1\\) n’appartient pas à cette médiatrice, donc aucune exclusion supplémentaire n’est nécessaire. Réponse \\(\\boxed{C}\\)."}, {"q": "On considère dans le plan rapporté à un repère orthonormé direct les points \\(A(a)\\), \\(B(b)\\) et \\(M(z)\\). \\(ABM\\) est un triangle direct, rectangle et isocèle en \\(M\\) si et seulement si :", "choices": ["\\(\\frac{z-b}{z-a}=\\frac{\\overline z-\\overline b}{\\overline z-\\overline a}\\)", "\\(\\frac{z-b}{z-a}=e^{i\\pi/4}\\)", "\\(\\frac{z-b}{z-a}=-i\\)", "\\(\\frac{z-b}{z-a}=i\\)"], "answer": 3, "corr": "Le triangle est rectangle et isocèle en \\(M\\), donc les vecteurs \\(\\overrightarrow{MA}\\) et \\(\\overrightarrow{MB}\\) ont même norme et sont perpendiculaires. Comme le triangle \\(ABM\\) est direct, le passage de la direction de \\(\\overrightarrow{AM}\\) à celle de \\(\\overrightarrow{BM}\\) correspond à une rotation d’angle \\(+\\frac{\\pi}{2}\\). Or\n\\[\n\\frac{z-b}{z-a}\n\\]\ncompare précisément les directions de \\(\\overrightarrow{BM}\\) et \\(\\overrightarrow{AM}\\). Son module vaut \\(1\\) et son argument vaut \\(\\frac{\\pi}{2}\\), donc\n\\[\n\\frac{z-b}{z-a}=i.\n\\]\nRéponse \\(\\boxed{D}\\)."}, {"q": "Soit \\(\\theta\\in]-\\pi,0]\\). La forme trigonométrique du nombre complexe \\(1+e^{i\\theta}\\) est :", "choices": ["\\(\\left[-2\\cos\\frac{\\theta}{2},\\,\\pi+\\frac{\\theta}{2}\\right]\\)", "\\(\\left[2\\cos\\frac{\\theta}{2},\\,\\pi+\\frac{\\theta}{2}\\right]\\)", "\\(\\left[2\\cos\\frac{\\theta}{2},\\,\\frac{\\theta}{2}\\right]\\)", "\\(\\left[-2\\cos\\frac{\\theta}{2},\\,-\\frac{\\theta}{2}\\right]\\)"], "answer": 2, "corr": "On factorise :\n\\[\n1+e^{i\\theta}\n=e^{i\\theta/2}\\left(e^{-i\\theta/2}+e^{i\\theta/2}\\right)\n=2\\cos\\frac{\\theta}{2}\\,e^{i\\theta/2}.\n\\]\nPour \\(\\theta\\in]-\\pi,0]\\), on a \\(\\frac{\\theta}{2}\\in]-\\frac{\\pi}{2},0]\\), donc\n\\(\\cos\\frac{\\theta}{2}>0\\). Le module est donc \\(2\\cos\\frac{\\theta}{2}\\) et un argument est \\(\\frac{\\theta}{2}\\). Réponse \\(\\boxed{C}\\)."}, {"q": "\\[\n\\lim_{x\\to\\pi/4}\\frac{\\tan x-1}{x-\\pi/4}=\n\\]", "choices": ["\\(0\\)", "\\(2\\)", "\\(+\\infty\\)", "\\(-\\infty\\)"], "answer": 1, "corr": "Il s’agit du taux d’accroissement de \\(f(x)=\\tan x\\) en \\(a=\\frac{\\pi}{4}\\) :\n\\[\n\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}=f'(a).\n\\]\nOr\n\\[\n(\\tan x)'=\\frac1{\\cos^2x},\n\\]\ndonc\n\\[\nf'\\left(\\frac{\\pi}{4}\\right)=\\frac1{(\\sqrt2/2)^2}=2.\n\\]\nRéponse \\(\\boxed{B}\\)."}, {"q": "\\[\n\\lim_{x\\to1^-}\\left[\\ln(1-x)+\\frac1{1-x}\\right]=\n\\]", "choices": ["\\(0\\)", "\\(1\\)", "\\(-\\infty\\)", "\\(+\\infty\\)"], "answer": 3, "corr": "Posons \\(t=1-x\\). Lorsque \\(x\\to1^-\\), on a \\(t\\to0^+\\). La limite devient\n\\[\n\\lim_{t\\to0^+}\\left(\\ln t+\\frac1t\\right).\n\\]\nLe terme \\(\\frac1t\\) tend vers \\(+\\infty\\) et domine \\(\\ln t\\), qui tend vers \\(-\\infty\\). Par exemple,\n\\[\nt\\ln t\\to0,\n\\]\ndonc\n\\[\n\\ln t+\\frac1t=\\frac{1+t\\ln t}{t}\\to+\\infty.\n\\]\nRéponse \\(\\boxed{D}\\)."}, {"q": "L’équation\n\\[\nx^5+x^3-1=0\n\\]\n:", "choices": ["n’admet pas de solutions réelles", "admet une seule solution réelle", "admet exactement 3 solutions réelles", "admet 5 solutions réelles"], "answer": 1, "corr": "Posons \\(f(x)=x^5+x^3-1\\). Alors\n\\[\nf'(x)=5x^4+3x^2=x^2(5x^2+3)\\ge0.\n\\]\nLa fonction est strictement croissante sur \\(\\mathbb R\\) (malgré \\(f'(0)=0\\) en un point isolé). De plus,\n\\[\n\\lim_{x\\to-\\infty}f(x)=-\\infty,\\qquad\n\\lim_{x\\to+\\infty}f(x)=+\\infty.\n\\]\nPar continuité, elle coupe l’axe une fois et une seule. Réponse \\(\\boxed{B}\\)."}, {"q": "\\[\n\\lim_{x\\to0}\\frac{\\cos(\\sin x)-1}{\\tan^2x}=\n\\]", "choices": ["\\(0\\)", "\\(-1\\)", "\\(-\\frac12\\)", "\\(\\frac12\\)"], "answer": 2, "corr": "Au voisinage de \\(0\\),\n\\[\n\\cos u-1\\sim-\\frac{u^2}{2},\\qquad \\sin x\\sim x,\\qquad \\tan x\\sim x.\n\\]\nAinsi\n\\[\n\\cos(\\sin x)-1\\sim-\\frac{\\sin^2x}{2}\\sim-\\frac{x^2}{2}\n\\]\net\n\\[\n\\tan^2x\\sim x^2.\n\\]\nDonc la limite vaut\n\\[\n-\\frac12.\n\\]\nRéponse \\(\\boxed{C}\\)."}, {"q": "L’ensemble de définition de la fonction\n\\[\nx\\longmapsto \\frac{x-1}{\\ln(\\sqrt{x-1})}\n\\]\nest :", "choices": ["\\(]1,+\\infty[\\)", "\\(]1,2[\\)", "\\(]1,2[\\cup]2,+\\infty[\\)", "\\(]2,+\\infty[\\)"], "answer": 2, "corr": "Pour que \\(\\ln(\\sqrt{x-1})\\) soit défini, il faut\n\\[\n\\sqrt{x-1}>0\\quad\\Longleftrightarrow\\quad x>1.\n\\]\nComme ce logarithme est au dénominateur, il faut aussi\n\\[\n\\ln(\\sqrt{x-1})\\ne0\n\\quad\\Longleftrightarrow\\quad\n\\sqrt{x-1}\\ne1\n\\quad\\Longleftrightarrow\\quad x\\ne2.\n\\]\nDonc\n\\[\nD_f=]1,2[\\cup]2,+\\infty[.\n\\]\nRéponse \\(\\boxed{C}\\)."}, {"q": "Soit \\(f\\) la fonction définie sur \\(\\mathbb R\\) par\n\\[\nf(x)=(x-1)(x-2)(x-3)(x-4).\n\\]\nAlors l’équation \\(f'(x)=0\\) :", "choices": ["n’admet aucune solution réelle", "admet une seule solution réelle", "admet exactement deux solutions réelles", "admet trois solutions réelles"], "answer": 3, "corr": "La fonction \\(f\\) s’annule en quatre points distincts \\(1,2,3,4\\). Par le théorème de Rolle, \\(f'\\) s’annule au moins une fois dans chacun des intervalles\n\\[\n]1,2[,\\quad ]2,3[,\\quad ]3,4[.\n\\]\nDonc \\(f'\\) possède au moins trois racines réelles. Or \\(f'\\) est un polynôme de degré \\(3\\), il ne peut pas en avoir davantage. Il en a exactement trois. Réponse \\(\\boxed{D}\\)."}, {"q": "\\[\n\\lim_{x\\to+\\infty}\\ln\\left(x+\\sqrt{x^2+2}\\right)=\n\\]", "choices": ["\\(0\\)", "\\(\\ln\\sqrt2\\)", "\\(-\\infty\\)", "\\(+\\infty\\)"], "answer": 3, "corr": "Pour \\(x>0\\),\n\\[\n\\sqrt{x^2+2}=x\\sqrt{1+\\frac2{x^2}}.\n\\]\nAinsi\n\\[\nx+\\sqrt{x^2+2}\n=x\\left(1+\\sqrt{1+\\frac2{x^2}}\\right)\\sim2x.\n\\]\nPar conséquent\n\\[\n\\ln\\left(x+\\sqrt{x^2+2}\\right)\\sim\\ln(2x)\\to+\\infty.\n\\]\nRéponse \\(\\boxed{D}\\)."}, {"q": "Si \\(G\\) est le barycentre des points pondérés \\((M,-1)\\) et \\((N,2)\\), alors :", "choices": ["\\(\\overrightarrow{MG}=-\\frac12\\overrightarrow{MN}\\)", "\\(\\overrightarrow{MG}=\\frac12\\overrightarrow{MN}\\)", "\\(\\overrightarrow{MG}=-\\overrightarrow{MN}\\)", "\\(\\overrightarrow{MG}=2\\overrightarrow{MN}\\)"], "answer": 3, "corr": "La somme des coefficients vaut \\(-1+2=1\\ne0\\). Par la formule du barycentre,\n\\[\n\\overrightarrow{OG}=-\\overrightarrow{OM}+2\\overrightarrow{ON}.\n\\]\nAlors\n\\[\n\\overrightarrow{MG}\n=\\overrightarrow{OG}-\\overrightarrow{OM}\n=2(\\overrightarrow{ON}-\\overrightarrow{OM})\n=2\\overrightarrow{MN}.\n\\]\nRéponse \\(\\boxed{D}\\)."}, {"q": "Si \\(ABC\\) est un triangle rectangle en \\(A\\) et \\(I\\) le milieu du côté \\([BC]\\), alors :", "choices": ["\\(\\overrightarrow{AB}\\cdot\\overrightarrow{AI}=\\frac12AI^2\\)", "\\(\\overrightarrow{AB}\\cdot\\overrightarrow{AI}=AB^2\\)", "\\(\\overrightarrow{AB}\\cdot\\overrightarrow{AI}=AI^2\\)", "\\(\\overrightarrow{AB}\\cdot\\overrightarrow{AI}=\\frac12AB^2\\)"], "answer": 3, "corr": "Comme \\(I\\) est le milieu de \\([BC]\\),\n\\[\n\\overrightarrow{AI}=\\frac12(\\overrightarrow{AB}+\\overrightarrow{AC}).\n\\]\nDonc\n\\[\n\\overrightarrow{AB}\\cdot\\overrightarrow{AI}\n=\\frac12\\left(\\overrightarrow{AB}\\cdot\\overrightarrow{AB}\n+\\overrightarrow{AB}\\cdot\\overrightarrow{AC}\\right).\n\\]\nLe triangle est rectangle en \\(A\\), donc\n\\(\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=0\\). Ainsi\n\\[\n\\overrightarrow{AB}\\cdot\\overrightarrow{AI}=\\frac12AB^2.\n\\]\nRéponse \\(\\boxed{D}\\)."}, {"q": "Soit \\(ABC\\) un triangle tel que \\(AB=c\\), \\(AC=b\\), \\(BC=a\\) et \\(\\widehat{BAC}=\\alpha\\).", "choices": ["\\(a^2=b^2+c^2-2bc\\cos\\alpha\\)", "\\(a^2=b^2+c^2+2bc\\cos\\alpha\\)", "\\(a^2=b^2+c^2-2bc\\sin\\alpha\\)", "\\(a^2=b^2+c^2+2bc\\sin\\alpha\\)"], "answer": 0, "corr": "C’est exactement la formule d’Al-Kashi (loi des cosinus) appliquée au côté \\(a=BC\\), opposé à l’angle \\(\\alpha=\\widehat{BAC}\\) :\n\\[\na^2=b^2+c^2-2bc\\cos\\alpha.\n\\]\nRéponse \\(\\boxed{A}\\)."}, {"q": "Le plan est rapporté à un repère orthonormé. Soit \\(A\\) et \\(B\\) deux points distincts. L’ensemble\n\\[\n\\left\\{M\\mid \\left\\|\\overrightarrow{MA}-\\overrightarrow{MB}\\right\\|\n=\n\\left\\|2\\overrightarrow{MA}+\\overrightarrow{MB}\\right\\|\\right\\}\n\\]\nest :", "choices": ["la droite \\((AB)\\)", "une droite perpendiculaire à \\((AB)\\)", "un cercle passant par \\(A\\) et \\(B\\)", "un cercle passant par \\(A\\)"], "answer": 3, "corr": "On remarque que\n\\[\n\\overrightarrow{MA}-\\overrightarrow{MB}\n=\\overrightarrow{BA},\n\\]\ndonc le membre de gauche vaut la constante \\(AB\\).\n\nD’autre part, si \\(G\\) est le barycentre de \\((A,2)\\) et \\((B,1)\\), alors\n\\[\n2\\overrightarrow{MA}+\\overrightarrow{MB}=3\\overrightarrow{MG}.\n\\]\nL’équation devient\n\\[\nAB=3MG\\quad\\Longleftrightarrow\\quad MG=\\frac{AB}{3}.\n\\]\nC’est un cercle de centre \\(G\\). Comme\n\\[\nAG=\\frac{AB}{3},\n\\]\nle point \\(A\\) appartient au cercle, mais pas \\(B\\). Réponse \\(\\boxed{D}\\)."}, {"q": "Le plan est rapporté à un repère orthonormé. La parabole de foyer \\(F(1,0)\\) et de directrice \\(D:x=-1\\) a pour équation :", "choices": ["\\(y^2=4x\\)", "\\(y^2=-4x\\)", "\\(x^2=4y\\)", "\\(x^2=-4y\\)"], "answer": 0, "corr": "Le sommet est le milieu entre le foyer \\(F(1,0)\\) et la directrice \\(x=-1\\), donc \\(S=(0,0)\\). Le paramètre focal vaut \\(p=1\\). Une parabole d’axe \\(Ox\\), ouverte vers la droite, de sommet \\(O\\), a pour équation\n\\[\ny^2=4px.\n\\]\nIci \\(p=1\\), donc\n\\[\ny^2=4x.\n\\]\nRéponse \\(\\boxed{A}\\)."}, {"q": "Le plan est rapporté à un repère orthonormé. L’ensemble des points \\(M(x,y)\\) tels que\n\\[\nx^2-y^2-2x+4y-3=0\n\\]\nest :", "choices": ["une ellipse", "une hyperbole", "un singleton", "la réunion de deux droites"], "answer": 3, "corr": "On complète les carrés :\n\\[\nx^2-2x=(x-1)^2-1,\n\\]\net\n\\[\n-y^2+4y=-(y-2)^2+4.\n\\]\nDonc\n\\[\n(x-1)^2-(y-2)^2-1+4-3=0,\n\\]\nsoit\n\\[\n(x-1)^2-(y-2)^2=0.\n\\]\nAinsi\n\\[\n[(x-1)-(y-2)]\\,[(x-1)+(y-2)]=0,\n\\]\nce qui représente la réunion de deux droites. Réponse \\(\\boxed{D}\\)."}, {"q": "Soit \\(f\\) la fonction définie sur \\(]0,+\\infty[\\) par\n\\[\nf(x)=\\frac1{\\sqrt[3]{x}}.\n\\]\nLa primitive \\(F\\) de \\(f\\) sur \\(]0,+\\infty[\\) vérifiant \\(F(1)=0\\) est définie par :", "choices": ["\\(F(x)=\\frac32x^{3/2}-\\frac32\\)", "\\(F(x)=\\frac32x^{2/3}-\\frac32\\)", "\\(F(x)=\\frac23x^{3/2}-\\frac23\\)", "\\(F(x)=\\frac23x^{2/3}-\\frac23\\)"], "answer": 1, "corr": "On écrit\n\\[\nf(x)=x^{-1/3}.\n\\]\nUne primitive est\n\\[\nF(x)=\\frac{x^{2/3}}{2/3}+C=\\frac32x^{2/3}+C.\n\\]\nLa condition \\(F(1)=0\\) donne\n\\[\n\\frac32+C=0\\quad\\Longrightarrow\\quad C=-\\frac32.\n\\]\nDonc\n\\[\nF(x)=\\frac32x^{2/3}-\\frac32.\n\\]\nRéponse \\(\\boxed{B}\\)."}, {"q": "\\[\n\\int_{-\\pi/2}^{\\pi/2}\\frac{\\cos x}{\\sin^3x}\\,dx=\n\\]", "choices": ["\\(-\\frac23\\)", "\\(0\\)", "\\(\\frac23\\)", "\\(2\\)"], "answer": 1, "corr": "L’intégrande\n\\[\ng(x)=\\frac{\\cos x}{\\sin^3x}\n\\]\nest impaire, car \\(\\cos(-x)=\\cos x\\) et \\(\\sin^3(-x)=-\\sin^3x\\). Dans l’interprétation symétrique attendue par ce QCM, on obtient donc\n\\[\n\\int_{-\\pi/2}^{\\pi/2}g(x)\\,dx=0.\n\\]\nLa réponse attendue est \\(\\boxed{B}\\).\n\nAttention toutefois : au sens strict des intégrales impropres usuelles, l’intégrale a une singularité en \\(x=0\\) et les deux intégrales latérales divergent. La valeur \\(0\\) correspond à la valeur principale de Cauchy, ce qui constitue une subtilité importante de cette question."}, {"q": "Pour tout \\(x\\in\\left[0,\\frac{\\pi}{2}\\right]\\),\n\\[\n\\int_0^{\\sin^2x}\\frac{dt}{\\sqrt{1-t}}=\n\\]", "choices": ["\\(2-2\\cos x\\)", "\\(2\\cos x-2\\)", "\\(2\\sin x\\)", "\\(-2\\cos x\\)"], "answer": 0, "corr": "Une primitive de \\((1-t)^{-1/2}\\) est\n\\[\n-2\\sqrt{1-t}.\n\\]\nDonc\n\\[\n\\int_0^{\\sin^2x}\\frac{dt}{\\sqrt{1-t}}\n=\n-2\\sqrt{1-\\sin^2x}+2.\n\\]\nOr, pour \\(x\\in[0,\\pi/2]\\), \\(\\cos x\\ge0\\), donc\n\\[\n\\sqrt{1-\\sin^2x}=|\\cos x|=\\cos x.\n\\]\nAinsi l’intégrale vaut\n\\[\n2-2\\cos x.\n\\]\nRéponse \\(\\boxed{A}\\)."}, {"q": "Soit \\(f\\) une fonction définie et dérivable sur \\(\\mathbb R\\). Si pour tout \\(x\\in]0,+\\infty[\\),\n\\[\nf(1+\\ln x)=\\ln^2x,\n\\]\nalors :", "choices": ["\\(f'(2)=\\frac2e\\)", "\\(f'(2)=2\\)", "\\(f'(2)=2\\ln2\\)", "\\(f'(2)=1\\)"], "answer": 1, "corr": "On dérive l’identité :\n\\[\nf'(1+\\ln x)\\cdot\\frac1x=\\frac{2\\ln x}{x}.\n\\]\nDonc\n\\[\nf'(1+\\ln x)=2\\ln x.\n\\]\nPour obtenir \\(f'(2)\\), on impose\n\\[\n1+\\ln x=2\\quad\\Longrightarrow\\quad \\ln x=1\\quad\\Longrightarrow\\quad x=e.\n\\]\nAlors\n\\[\nf'(2)=2\\ln e=2.\n\\]\nRéponse \\(\\boxed{B}\\)."}, {"q": "Pour tout entier naturel non nul \\(n\\),\n\\[\n\\int_0^2\\left(1+2x+\\cdots +(n+1)x^n\\right)\\,dx=\n\\]", "choices": ["\\(2^n-1\\)", "\\(2^n-2\\)", "\\(2^{n+1}-2\\)", "\\(2^{n+2}-2\\)"], "answer": 3, "corr": "On intègre terme à terme :\n\\[\n\\int_0^2 (k+1)x^k\\,dx=\\left[x^{k+1}\\right]_0^2=2^{k+1}.\n\\]\nAinsi\n\\[\n\\sum_{k=0}^{n}2^{k+1}=2+2^2+\\cdots+2^{n+1}=2^{n+2}-2.\n\\]\nDonc \\(\\boxed{D}\\)."}, {"q": "\\[\n\\int_0^{\\sqrt2}\\sqrt{2-x^2}\\,dx=\n\\]", "choices": ["\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi^2}{4}\\)", "\\(\\frac{\\pi^2}{2}\\)"], "answer": 1, "corr": "La courbe \\(y=\\sqrt{2-x^2}\\) est un quart de cercle de rayon \\(\\sqrt2\\). Son aire vaut\n\\[\n\\frac14\\pi(\\sqrt2)^2=\\frac{\\pi}{2}.\n\\]\nDonc \\(\\boxed{B}\\)."}, {"q": "Pour tout réel positif \\(x\\),", "choices": ["\\(1+x+\\frac{x^2}{2}<e^x\\)", "\\(1+x+\\frac{x^2}{2}\\le e^x\\)", "\\(1+x+\\frac{x^2}{2}>e^x\\)", "\\(1+x+\\frac{x^2}{2}\\ge e^x\\)"], "answer": 0, "corr": "Pour \\(x>0\\),\n\\[\ne^x=1+x+\\frac{x^2}{2}+\\frac{x^3}{6}+\\cdots,\n\\]\net tous les termes suivants sont strictement positifs. Donc\n\\[\n1+x+\\frac{x^2}{2}<e^x.\n\\]\nRéponse \\(\\boxed{A}\\)."}, {"q": "Une hausse de \\(50\\%\\) suivie d’une baisse de \\(30\\%\\) revient à :", "choices": ["une baisse de 20 %", "une hausse de 20 %", "une baisse de 5 %", "une hausse de 5 %"], "answer": 3, "corr": "Le coefficient global est\n\\[\n1{,}50\\times0{,}70=1{,}05.\n\\]\nLa variation globale est donc une hausse de \\(5\\%\\). Réponse \\(\\boxed{D}\\)."}, {"q": "Soit \\(n\\) un entier naturel non nul.\n\\[\n\\sum_{k=1}^{n}\\ln\\left(1+\\frac1k\\right)=\n\\]", "choices": ["\\(\\ln(n+1)\\)", "\\(\\ln\\left(1+\\frac1n\\right)\\)", "\\(\\ln(n+1)-\\ln2\\)", "\\(\\ln(n+1)-1\\)"], "answer": 0, "corr": "\\[\n\\ln\\left(1+\\frac1k\\right)=\\ln\\frac{k+1}{k}.\n\\]\nDonc\n\\[\n\\sum_{k=1}^{n}\\ln\\frac{k+1}{k}\n=\\ln\\left(\\frac21\\frac32\\cdots\\frac{n+1}{n}\\right)\n=\\ln(n+1).\n\\]\nRéponse \\(\\boxed{A}\\)."}, {"q": "Soit \\(n\\) un entier naturel.\n\\[\n\\sum_{k=0}^{n}(-1)^k\\cos(k\\pi)=\n\\]", "choices": ["\\(1\\)", "\\(n+1\\)", "\\(\\frac{n+1}{2}\\)", "\\((-1)^{n+1}\\)"], "answer": 1, "corr": "Comme \\(\\cos(k\\pi)=(-1)^k\\),\n\\[\n(-1)^k\\cos(k\\pi)=1.\n\\]\nIl y a \\(n+1\\) termes, donc la somme vaut \\(n+1\\). Réponse \\(\\boxed{B}\\)."}, {"q": "\\[\n\\lim_{n\\to+\\infty}\\frac{2^n}{3^n+2^n}=\n\\]", "choices": ["\\(1\\)", "\\(0\\)", "\\(\\frac23\\)", "\\(+\\infty\\)"], "answer": 1, "corr": "\\[\n\\frac{2^n}{3^n+2^n}\n=\\frac{1}{(3/2)^n+1}\\longrightarrow0.\n\\]\nRéponse \\(\\boxed{B}\\)."}, {"q": "Soit \\(a,b,c\\) trois entiers. On note \\(d=a\\wedge b\\). Si \\(c\\) divise \\(a\\), alors :", "choices": ["\\(c\\) divise \\(d\\)", "\\(c\\) divise \\(\\frac{b}{d}\\)", "\\(c\\) divise \\(\\frac{a}{d}\\)", "\\(c\\) divise \\(\\frac{a\\,b}{d}\\)"], "answer": 3, "corr": "Comme\n\\[\n\\frac{ab}{d}\n\\]\nest un multiple de \\(a\\), et que \\(c\\mid a\\), on a\n\\[\nc\\mid\\frac{ab}{d}.\n\\]\nRéponse \\(\\boxed{D}\\)."}, {"q": "Pour tout entier naturel non nul \\(n\\), le PGCD de \\((2n+5)\\) et \\((3n+7)\\) est égal à :", "choices": ["\\(1\\)", "\\(2\\)", "\\(3\\)", "\\(n\\)"], "answer": 0, "corr": "Tout diviseur commun divise\n\\[\n3(2n+5)-2(3n+7)=1.\n\\]\nLe PGCD vaut donc \\(1\\). Réponse \\(\\boxed{A}\\)."}, {"q": "Soit \\(p\\) un nombre premier. Pour tout entier naturel \\(n\\),", "choices": ["\\(n^{p-1}\\equiv1\\pmod p\\)", "\\(n^p\\equiv1\\pmod p\\)", "\\(n^p\\equiv n\\pmod p\\)", "\\(n^{p-1}\\equiv n\\pmod p\\)"], "answer": 2, "corr": "Le petit théorème de Fermat donne, pour tout entier \\(n\\),\n\\[\nn^p\\equiv n\\pmod p.\n\\]\nRéponse \\(\\boxed{C}\\)."}, {"q": "Pour tout entier naturel \\(n\\),", "choices": ["\\(n^3-n\\equiv0\\pmod6\\)", "\\(n^3-n\\equiv1\\pmod6\\)", "\\(n^3-n\\equiv2\\pmod6\\)", "\\(n^3-n\\equiv3\\pmod6\\)"], "answer": 0, "corr": "\\[\nn^3-n=n(n-1)(n+1)\n\\]\nest le produit de trois entiers consécutifs, donc divisible par \\(2\\) et par \\(3\\), donc par \\(6\\). Réponse \\(\\boxed{A}\\)."}, {"q": "\\[\n3x\\equiv4\\pmod5\n\\]\nsi et seulement si :", "choices": ["\\(x\\equiv1\\pmod5\\)", "\\(x\\equiv2\\pmod5\\)", "\\(x\\equiv3\\pmod5\\)", "\\(x\\equiv4\\pmod5\\)"], "answer": 2, "corr": "L’inverse de \\(3\\) modulo \\(5\\) est \\(2\\). Donc\n\\[\nx\\equiv 2\\cdot4=8\\equiv3\\pmod5.\n\\]\nRéponse \\(\\boxed{C}\\)."}, {"q": "Soit \\(a,b,c\\) trois termes consécutifs d’une suite arithmétique. Si\n\\[\na+b+c=27,\n\\]\nalors :", "choices": ["\\(a+c=9\\)", "\\(a+c=11\\)", "\\(a+c=18\\)", "\\(a+c=22\\)"], "answer": 2, "corr": "Pour trois termes consécutifs,\n\\[\na+c=2b.\n\\]\nAlors \\(a+b+c=3b=27\\), donc \\(b=9\\), et\n\\[\na+c=18.\n\\]\nRéponse \\(\\boxed{C}\\)."}, {"q": "Sachant que\n\\[\n2026=3\\times675+1,\n\\]\non a :", "choices": ["\\(2^{2026}\\equiv0\\pmod7\\)", "\\(2^{2026}\\equiv1\\pmod7\\)", "\\(2^{2026}\\equiv2\\pmod7\\)", "\\(2^{2026}\\equiv3\\pmod7\\)"], "answer": 2, "corr": "Comme\n\\[\n2^3=8\\equiv1\\pmod7,\n\\]\nalors\n\\[\n2^{2026}=(2^3)^{675}\\cdot2\\equiv2\\pmod7.\n\\]\nRéponse \\(\\boxed{C}\\)."}, {"q": "On choisit simultanément et au hasard \\(3\\) boules parmi \\(n\\) boules avec \\(n\\ge3\\). Le nombre de cas possibles est égal à :", "choices": ["\\(C_n^3\\)", "\\(3!\\,C_n^3\\)", "\\(3^n\\)", "\\(n^3\\)"], "answer": 0, "corr": "L’ordre ne compte pas : il s’agit de choisir \\(3\\) objets parmi \\(n\\). Le nombre de cas est\n\\[\n\\binom n3=C_n^3.\n\\]\nRéponse \\(\\boxed{A}\\)."}, {"q": "Soit\n\\[\nE=\\{1,2,3,\\ldots,10\\}.\n\\]\nLe cardinal de l’ensemble des parties de \\(E\\) qui contiennent \\(10\\) est égal à :", "choices": ["\\(2^{10}\\)", "\\(2^9\\)", "\\(2^{10}-10\\)", "\\(2^{10}-1\\)"], "answer": 1, "corr": "Le \\(10\\) est imposé. Chacun des \\(9\\) autres éléments peut être choisi ou non, soit\n\\[\n2^9\n\\]\npossibilités. Réponse \\(\\boxed{B}\\)."}, {"q": "\\[\n\\sum_{k=1}^{100} C_{100}^{k}(-1)^k=\n\\]", "choices": ["\\(-1\\)", "\\(0\\)", "\\(1\\)", "\\(100\\)"], "answer": 0, "corr": "Par le binôme de Newton,\n\\[\n\\sum_{k=0}^{100}C_{100}^k(-1)^k=(1-1)^{100}=0.\n\\]\nLe terme \\(k=0\\) vaut \\(1\\), donc la somme de \\(k=1\\) à \\(100\\) vaut \\(-1\\). Réponse \\(\\boxed{A}\\)."}, {"q": "L’espace est rapporté à un repère orthonormé direct \\((O,\\vec i,\\vec j,\\vec k)\\). Soit\n\\[\nA(2,1,0),\\quad B(1,2,0),\\quad C(0,0,1).\n\\]\nLe volume du tétraèdre \\(OABC\\) est égal à :", "choices": ["\\(\\frac16\\)", "\\(\\frac13\\)", "\\(\\frac12\\)", "\\(1\\)"], "answer": 2, "corr": "\\[\nV=\\frac16\\left|\\det(\\overrightarrow{OA},\\overrightarrow{OB},\\overrightarrow{OC})\\right|.\n\\]\nLe déterminant vaut \\(3\\), donc\n\\[\nV=\\frac{3}{6}=\\frac12.\n\\]\nRéponse \\(\\boxed{C}\\)."}, {"q": "L’espace est rapporté à un repère orthonormé direct. Les droites\n\\[\n\\begin{cases}x=1-\\alpha\\\\y=\\alpha\\\\z=\\alpha\\end{cases}\n\\quad\\text{et}\\quad\n\\begin{cases}x=2\\beta\\\\y=1-2\\beta\\\\z=1-2\\beta\\end{cases}\n\\]\nsont :", "choices": ["strictement parallèles", "confondues", "sécantes", "disjointes"], "answer": 1, "corr": "Leurs vecteurs directeurs sont\n\\[\n(-1,1,1)\\quad\\text{et}\\quad(2,-2,-2)=-2(-1,1,1).\n\\]\nElles sont parallèles. Le point \\((0,1,1)\\) appartient aux deux droites (\\(\\alpha=1\\), \\(\\beta=0\\)). Elles sont donc confondues. Réponse \\(\\boxed{B}\\)."}, {"q": "L’espace est rapporté à un repère orthonormé. On considère \\(A(2,0,2)\\) et le plan\n\\[\nP:x-y+z-1=0.\n\\]\nLe projeté orthogonal de \\(A\\) sur \\(P\\) est :", "choices": ["\\(H(0,-1,0)\\)", "\\(H(1,0,1)\\)", "\\(H(1,1,1)\\)", "\\(H(1,0,0)\\)"], "answer": 2, "corr": "Un vecteur normal est \\((1,-1,1)\\). On écrit\n\\[\nH=A-\\lambda(1,-1,1).\n\\]\nEn imposant \\(H\\in P\\), on trouve \\(\\lambda=1\\), donc\n\\[\nH=(1,1,1).\n\\]\nRéponse \\(\\boxed{C}\\)."}, {"q": "L’espace est rapporté à un repère orthonormé direct. Soit \\(A,B,C\\) trois points distincts. La distance du point \\(C\\) à la droite \\((AB)\\) est :", "choices": ["\\(\\dfrac{\\|\\overrightarrow{AC}\\wedge\\overrightarrow{AB}\\|}{\\|\\overrightarrow{AB}\\|}\\)", "\\(\\dfrac{\\|\\overrightarrow{AC}\\wedge\\overrightarrow{BC}\\|}{\\|\\overrightarrow{AB}\\|}\\)", "\\(\\dfrac{\\|\\overrightarrow{AC}\\wedge\\overrightarrow{AB}\\|}{\\|\\overrightarrow{AC}\\|}\\)", "\\(\\dfrac{\\|\\overrightarrow{AC}\\wedge\\overrightarrow{BC}\\|}{\\|\\overrightarrow{AC}\\|}\\)"], "answer": 0, "corr": "L’aire du parallélogramme est\n\\[\n\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|\n=AB\\cdot d(C,(AB)).\n\\]\nDonc\n\\[\nd(C,(AB))=\n\\frac{\\|\\overrightarrow{AC}\\wedge\\overrightarrow{AB}\\|}{\\|\\overrightarrow{AB}\\|}.\n\\]\nRéponse \\(\\boxed{A}\\)."}, {"q": "Soit \\(M\\) une matrice carrée d’ordre \\(3\\). Si \\(\\det(M)=1\\), alors\n\\[\n\\det(3M)=\n\\]", "choices": ["\\(1\\)", "\\(3\\)", "\\(9\\)", "\\(27\\)"], "answer": 3, "corr": "Pour une matrice d’ordre \\(3\\),\n\\[\n\\det(3M)=3^3\\det(M)=27.\n\\]\nRéponse \\(\\boxed{D}\\)."}, {"q": "Soit \\((u_n)\\) définie par \\(u_0=2\\) et\n\\[\nu_{n+1}=\\frac12u_n+1.\n\\]\nAlors :", "choices": ["\\(\\displaystyle\\lim_{n\\to+\\infty}u_n=2\\)", "\\(\\displaystyle\\lim_{n\\to+\\infty}u_n=3\\)", "\\(\\displaystyle\\lim_{n\\to+\\infty}u_n=+\\infty\\)", "la suite n’admet pas de limite"], "answer": 0, "corr": "Comme \\(u_0=2\\),\n\\[\nu_1=\\frac12\\cdot2+1=2.\n\\]\nPar récurrence \\(u_n=2\\) pour tout \\(n\\). Donc\n\\[\n\\lim u_n=2.\n\\]\nRéponse \\(\\boxed{A}\\)."}, {"q": "Soit \\((u_n)\\) une suite définie sur \\(\\mathbb N\\). Si\n\\[\nu_n+n\\le u_{n+1},\n\\]\nalors :", "choices": ["\\(\\displaystyle\\lim u_n=-\\infty\\)", "\\(\\displaystyle\\lim u_n=+\\infty\\)", "\\((u_n)\\) est majorée", "\\((u_n)\\) est convergente"], "answer": 1, "corr": "On a\n\\[\nu_{n+1}-u_n\\ge n.\n\\]\nEn sommant,\n\\[\nu_n\\ge u_0+\\frac{n(n-1)}2.\n\\]\nLe membre de droite tend vers \\(+\\infty\\). Donc\n\\[\nu_n\\to+\\infty.\n\\]\nRéponse \\(\\boxed{B}\\)."}, {"q": "Si \\(f\\) est une fonction croissante et \\(u_{n+1}=f(u_n)\\), alors :", "choices": ["\\((u_n)\\) est croissante", "\\((u_n)\\) est décroissante", "\\((u_n)\\) est monotone", "\\((u_n)\\) n’est pas monotone"], "answer": 2, "corr": "Si \\(u_1\\ge u_0\\), la croissance de \\(f\\) entraîne \\(u_2\\ge u_1\\), puis par récurrence la suite est croissante. Si \\(u_1\\le u_0\\), le même raisonnement montre qu’elle est décroissante. Dans tous les cas, elle est monotone. Réponse \\(\\boxed{C}\\)."}, {"q": "\\(f\\) est un déplacement du plan différent de l’identité, \\(\\Delta\\) une droite et \\(O\\in\\Delta\\). Si\n\\[\nf(O)=O,\\qquad f(\\Delta)=\\Delta,\n\\]\nalors :", "choices": ["\\(f\\) est une symétrie glissante", "\\(f\\) est une symétrie orthogonale", "\\(f\\) est une symétrie centrale", "\\(f\\) est une translation"], "answer": 2, "corr": "Un déplacement est une isométrie directe. La présence d’un point fixe exclut une translation non triviale. La symétrie centrale de centre \\(O\\) fixe \\(O\\) et laisse toute droite passant par \\(O\\) globalement invariante. Réponse \\(\\boxed{C}\\)."}, {"q": "Dans un carré direct \\(ABCD\\) de centre \\(I\\), une isométrie \\(f\\) laisse le carré globalement invariant. Si \\(f(A)=B\\) et \\(f(B)\\ne A\\), alors :", "choices": ["\\(f=S_{(AB)}\\)", "\\(f=r_{(I,\\pi/2)}\\)", "\\(f=t_{\\overrightarrow{AB}}\\)", "\\(f=S_\\Delta\\) avec \\(\\Delta=\\mathrm{med}[AB]\\)"], "answer": 1, "corr": "La rotation de centre \\(I\\) et d’angle \\(\\frac{\\pi}{2}\\) envoie\n\\[\nA\\mapsto B,\\qquad B\\mapsto C.\n\\]\nElle vérifie donc les deux conditions. Réponse \\(\\boxed{B}\\)."}, {"q": "Dans un carré direct \\(ABCD\\),\n\\[\nS_{(AD)}\\circ S_{(BC)}\n\\]\nest égale à :", "choices": ["\\(t_{\\overrightarrow{AB}}\\)", "\\(t_{\\overrightarrow{BA}}\\)", "\\(t_{2\\overrightarrow{AB}}\\)", "\\(t_{2\\overrightarrow{BA}}\\)"], "answer": 3, "corr": "La composée de deux réflexions d’axes parallèles est une translation. En prenant \\((AD):x=0\\) et \\((BC):x=1\\), on obtient\n\\[\nx\\mapsto2-x\\mapsto x-2.\n\\]\nLe vecteur de translation est donc \\(2\\overrightarrow{BA}\\). Réponse \\(\\boxed{D}\\)."}, {"q": "Soit \\(\\Delta\\) et \\(\\Delta'\\) deux droites perpendiculaires en \\(I\\). La composée\n\\[\nS_{\\Delta}\\circ h_{(I,2)}\\circ S_{\\Delta'}\n\\]\nest :", "choices": ["une similitude directe de rapport \\(2\\) et d’angle \\(\\frac{\\pi}{2}\\)", "une similitude directe de rapport \\(2\\) et d’angle \\(-\\frac{\\pi}{2}\\)", "l’homothétie de centre \\(I\\) et de rapport \\(2\\)", "l’homothétie de centre \\(I\\) et de rapport \\(-2\\)"], "answer": 3, "corr": "Avec \\(\\Delta\\) comme axe \\(Ox\\) et \\(\\Delta'\\) comme axe \\(Oy\\),\n\\[\n(x,y)\\mapsto(-x,y)\\mapsto(-2x,2y)\\mapsto(-2x,-2y).\n\\]\nC’est l’homothétie de centre \\(I\\) et de rapport \\(-2\\). Réponse \\(\\boxed{D}\\)."}, {"q": "Soit \\(f\\) définie par\n\\[\nz'=-i\\overline z+2.\n\\]\nL’ensemble des points invariants est :", "choices": ["l’ensemble vide", "un singleton", "la réunion de deux droites", "une droite"], "answer": 0, "corr": "Posons \\(z=x+iy\\). L’équation d’un point fixe\n\\[\nz=-i\\overline z+2\n\\]\ndonne\n\\[\nx=2-y,\\qquad y=-x.\n\\]\nEn remplaçant \\(y=-x\\), on obtient \\(x=2+x\\), impossible. Il n’existe aucun point invariant. Réponse \\(\\boxed{A}\\)."}, {"q": "Soit \\(f\\) définie par\n\\[\nz'=2i\\overline z+1-2i.\n\\]\nAlors :", "choices": ["\\(f\\) est une similitude directe d’angle \\(-\\frac{\\pi}{2}\\)", "\\(f\\) est une similitude directe d’angle \\(\\frac{\\pi}{2}\\)", "\\(f\\) est une similitude indirecte de centre d’affixe \\(1\\)", "\\(f\\) est une similitude indirecte de centre d’affixe \\(i\\)"], "answer": 2, "corr": "La présence de \\(\\overline z\\) indique une similitude indirecte. Pour le centre, on résout\n\\[\nz=2i\\overline z+1-2i.\n\\]\nAvec \\(z=x+iy\\), on obtient\n\\[\nx=2y+1,\\qquad y=2x-2.\n\\]\nD’où \\(y=0\\) et \\(x=1\\). Le centre a pour affixe \\(1\\). Réponse \\(\\boxed{C}\\)."}, {"q": "Dans un espace probabilisé fini, \\(A\\) et \\(B\\) sont indépendants. Si\n\\[\np(A\\cup B)=\\frac23,\\qquad p(A)=\\frac12,\n\\]\nalors :", "choices": ["\\(p(B)=\\frac23\\)", "\\(p(B)=\\frac16\\)", "\\(p(B)=\\frac13\\)", "\\(p(B)=\\frac12\\)"], "answer": 2, "corr": "Comme \\(A\\) et \\(B\\) sont indépendants,\n\\[\np(A\\cap B)=p(A)p(B).\n\\]\nEn posant \\(p(B)=b\\),\n\\[\n\\frac23=\\frac12+b-\\frac12b\n=\\frac12+\\frac b2.\n\\]\nDonc \\(b=\\frac13\\). Réponse \\(\\boxed{C}\\)."}, {"q": " \\(X\\) est une variable aléatoire qui suit la loi uniforme sur \\([0,1]\\).\nSoit \\(t_1\\) et \\(t_2\\) deux réels de \\([0,1]\\).\n\\[\np(X<t_1)\\ge p(X\\ge t_2)\n\\]\nsi et seulement si :", "choices": ["\\(t_1\\ge\\frac12\\) et \\(t_2\\ge\\frac12\\)", "\\(t_1\\ge\\frac12\\) et \\(t_2\\le\\frac12\\)", "\\(t_1+t_2\\ge1\\)", "\\(t_1+t_2\\le1\\)"], "answer": 2, "corr": "Puisque \\(X\\) suit la loi uniforme sur \\([0,1]\\), pour \\(t\\in[0,1]\\),\n\\[\np(X<t)=t\n\\]\net\n\\[\np(X\\ge t)=1-t.\n\\]\nAinsi\n\\[\np(X<t_1)\\ge p(X\\ge t_2)\n\\]\néquivaut à\n\\[\nt_1\\ge1-t_2.\n\\]\nDonc\n\\[\nt_1+t_2\\ge1.\n\\]\nLa bonne réponse est donc \\(\\boxed{C}\\)."}, {"q": " \\(X\\) est une variable aléatoire qui suit la loi binomiale de paramètres \\(2\\) et \\(\\frac12\\).", "choices": ["\\(p(X=1)>p(X=2)\\)", "\\(p(X=1)<p(X=2)\\)", "\\(p(X=1)=p(X=2)\\)", "\\(p(X=1)+p(X=2)=1\\)"], "answer": 0, "corr": "On a\n\\[\nX\\sim\\mathcal B\\left(2,\\frac12\\right).\n\\]\nDonc\n\\[\np(X=k)=\\binom2k\\left(\\frac12\\right)^k\n\\left(\\frac12\\right)^{2-k}.\n\\]\nAinsi\n\\[\np(X=1)=\\binom21\\frac14=\\frac12\n\\]\net\n\\[\np(X=2)=\\binom22\\frac14=\\frac14.\n\\]\nPar conséquent\n\\[\np(X=1)>p(X=2).\n\\]\nLa bonne réponse est \\(\\boxed{A}\\)."}, {"q": "Soit \\(X\\) une variable aléatoire qui suit la loi exponentielle de paramètre \\(0{,}25\\).\n\\[\np(X\\le4)=\n\\]", "choices": ["\\(\\frac1e\\)", "\\(1-\\frac e4\\)", "\\(1-\\frac1e\\)", "\\(\\frac{e-1}{4}\\)"], "answer": 2, "corr": "Pour une variable aléatoire suivant une loi exponentielle de paramètre\n\\[\n\\lambda=0{,}25=\\frac14,\n\\]\nla fonction de répartition est\n\\[\np(X\\le x)=1-e^{-\\lambda x},\\qquad x\\ge0.\n\\]\nPour \\(x=4\\),\n\\[\np(X\\le4)=1-e^{-(1/4)\\times4}\n=1-e^{-1}\n=1-\\frac1e.\n\\]\nLa bonne réponse est \\(\\boxed{C}\\)."}, {"q": "Soit \\(X\\) une variable aléatoire telle que son espérance\n\\[\nE(X)=-1\n\\]\net sa variance\n\\[\nV(X)=1.\n\\]\nL’espérance de \\(X^2\\) est égale à :", "choices": ["\\(-1\\)", "\\(0\\)", "\\(1\\)", "\\(2\\)"], "answer": 3, "corr": "On utilise la relation\n\\[\nV(X)=E(X^2)-[E(X)]^2.\n\\]\nDonc\n\\[\nE(X^2)=V(X)+[E(X)]^2.\n\\]\nAvec\n\\[\nV(X)=1\\qquad\\text{et}\\qquad E(X)=-1,\n\\]\non obtient\n\\[\nE(X^2)=1+(-1)^2=1+1=2.\n\\]\nLa bonne réponse est \\(\\boxed{D}\\)."}];
let current = 0;
let score = 0;
const answered = Array(questions.length).fill(false);
const selected = Array(questions.length).fill(null);

const qNum = document.getElementById('qNum');
const qText = document.getElementById('qText');
const choicesBox = document.getElementById('choices');
const feedback = document.getElementById('feedback');
const correction = document.getElementById('correction');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const scoreBox = document.getElementById('score');
const quizPage = document.getElementById('quizPage');

function typeset() {
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetClear();
    MathJax.typesetPromise();
  }
}

function render() {
  const q = questions[current];
  qNum.textContent = `Question ${current+1} / ${questions.length}`;
  qText.innerHTML = q.q;
  choicesBox.innerHTML = '';
  feedback.className = 'feedback';
  feedback.textContent = '';
  correction.style.display = 'none';
  correction.innerHTML = '<h3>Correction détaillée</h3>' + q.corr;

  q.choices.forEach((choice, i) => {
    const div = document.createElement('div');
    div.className = 'choice';
    div.innerHTML = `<span class="badge">${String.fromCharCode(65+i)}</span><span>${choice}</span>`;
    if (answered[current]) {
      div.classList.add('disabled');
      if (i === q.answer) div.classList.add('correct');
      if (i === selected[current] && i !== q.answer) div.classList.add('wrong');
    } else {
      div.addEventListener('click', () => answer(i));
    }
    choicesBox.appendChild(div);
  });

  if (answered[current]) showFeedback();
  prevBtn.disabled = current === 0;
  nextBtn.disabled = !answered[current];
  nextBtn.textContent = current === questions.length-1 ? 'Voir le résultat' : 'Question suivante';
  progressText.textContent = `Progression : ${current+1} / ${questions.length}`;
  progressBar.style.width = `${((current+1)/questions.length)*100}%`;
  scoreBox.textContent = `Score : ${score}`;
  typeset();
}

function answer(i) {
  if (answered[current]) return;
  answered[current] = true;
  selected[current] = i;
  if (i === questions[current].answer) score++;
  render();
}

function showFeedback() {
  const good = selected[current] === questions[current].answer;
  feedback.className = 'feedback ' + (good ? 'ok' : 'no');
  feedback.textContent = good
    ? 'Bravo, votre réponse est correcte !'
    : 'Sorry, votre réponse est fausse.';
  correction.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
  if (!answered[current]) return;
  if (current < questions.length - 1) {
    current++;
    render();
    window.scrollTo({top:0, behavior:'smooth'});
  } else {
    showEnd();
  }
});
prevBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    render();
    window.scrollTo({top:0, behavior:'smooth'});
  }
});

function showEnd() {
  const pct = Math.round(score/questions.length*100);
  quizPage.innerHTML = `
    <div class="end">
      <h2>QCM CAPES 2026 terminé</h2>
      <div class="big">${score} / ${questions.length}</div>
      <p>Votre taux de réussite est de <strong>${pct} %</strong>.</p>
      <button id="restartBtn">Recommencer le QCM</button>
    </div>`;
  document.getElementById('restartBtn').onclick = () => location.reload();
}

render();

// ===== Identification + fin : EmailJS automatique =====
(function(){
 const SERVICE="532Ali3890", TEMPLATE="template_nulyfel", PUBLIC="HQCIWZTO_6qrJZxB1";
 const scoreNow=()=>{try{return Number(score)||0}catch(e){return 0}};
 const qNow=()=>{try{return Number(current)+1}catch(e){return 1}};
 const total=()=>{try{return questions.length}catch(e){return 60}};
 function screen(title,body,ok=true){
   const o=document.getElementById("finishOverlay"), c=o?.querySelector(".finish-card");
   if(c){c.innerHTML=`<h2>${title}</h2><div class="${ok?'send-ok':'send-error'}">${body}</div>`;o.hidden=false;}
 }
 async function finish(){
   const n=document.getElementById("teacherName"), e=document.getElementById("teacherEmail");
   const name=(n?.value||"").trim(), email=(e?.value||"").trim();
   if(!name){alert("Veuillez écrire le nom du professeur.");n?.focus();return}
   if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){alert("Veuillez écrire une adresse e-mail valide.");e?.focus();return}
   const s=scoreNow(), t=total(), q=Math.min(qNow(),t), b=document.getElementById("finishBtn");
   if(b){b.disabled=true;b.textContent="Envoi en cours…"}
   document.body.classList.add("quiz-finished");
   const message=`Résultat du QCM CAPES 2026\n\nNom du professeur : ${name}\nGmail du professeur : ${email}\nScore : ${s} / ${t}\nQuestion atteinte : ${q} / ${t}`;
   try{
     if(!window.emailjs) throw new Error("EmailJS non chargé");
     emailjs.init({publicKey:PUBLIC});
     await emailjs.send(SERVICE,TEMPLATE,{teacher_name:name,teacher_email:email,score:String(s),question:String(q),message,name,email,title:`Résultat QCM CAPES 2026 - ${name}`});
     // Envoi réussi : aucune fenêtre de confirmation n'est affichée au professeur.
     const overlay=document.getElementById("finishOverlay");
     if(overlay) overlay.hidden=true;
   }catch(err){
     document.body.classList.remove("quiz-finished");
     if(b){b.disabled=false;b.textContent="Je termine"}
     screen("Envoi impossible",`<p>Vérifiez votre connexion Internet puis réessayez.</p><p>${err?.text||err?.message||""}</p><button onclick="document.getElementById('finishOverlay').hidden=true">Fermer</button>`,false);
   }
 }
 window.addEventListener("DOMContentLoaded",()=>document.getElementById("finishBtn")?.addEventListener("click",finish));
})();


// ===== Identification obligatoire avant de jouer =====
(function(){
  document.documentElement.classList.add("pre-identification");

  function validEmail(v){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  window.addEventListener("DOMContentLoaded", function(){
    document.body.classList.add("identification-required");

    const nameEl=document.getElementById("teacherName");
    const emailEl=document.getElementById("teacherEmail");
    const startBtn=document.getElementById("startQuizBtn");
    const identity=document.getElementById("identityBox");

    if(!startBtn) return;

    startBtn.addEventListener("click", function(){
      const name=(nameEl?.value||"").trim();
      const email=(emailEl?.value||"").trim();

      document.querySelector(".identity-error")?.remove();

      if(!name){
        const p=document.createElement("p");
        p.className="identity-error";
        p.textContent="Veuillez saisir votre nom avant de commencer.";
        identity?.appendChild(p);
        nameEl?.focus();
        return;
      }

      if(!email || !validEmail(email)){
        const p=document.createElement("p");
        p.className="identity-error";
        p.textContent="Veuillez saisir une adresse e-mail valide avant de commencer.";
        identity?.appendChild(p);
        emailEl?.focus();
        return;
      }

      // Verrouiller l'identité pendant toute la partie.
      nameEl.readOnly=true;
      emailEl.readOnly=true;
      startBtn.style.display="none";
      document.querySelector(".identity-error")?.remove();

      document.body.classList.remove("identification-required");
      identity?.classList.add("identity-validated");

      // Faire défiler vers la première question.
      const quiz=document.getElementById("quiz") || document.querySelector("main") || document.querySelector(".quiz-container");
      quiz?.scrollIntoView({behavior:"smooth",block:"start"});
    });
  });
})();
