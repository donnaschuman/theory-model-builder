/* Social Theory Model Builder: theory library.
   References were checked against CrossRef, PubMed, publisher pages, and library catalogs (October 2026).
   Text between asterisks (*like this*) is italic in APA 7. Propositions are paraphrased; students find the
   exact wording and page number in the source. Shared by index.html and library.html. */
/* Groups are listed in alphabetical order. */
window.THEORY_GROUPS = [
  ["aging", "Aging"],
  ["child", "Child maltreatment and family violence"],
  ["crime", "Crime and deviance"],
  ["power", "Critical and empowerment perspectives"],
  ["disab", "Disability, stigma, and recovery"],
  ["health", "Health behavior and service use"],
  ["indig", "Historical trauma, racism, and Indigenous perspectives"],
  ["develop", "Human development and family"],
  ["migration", "Immigration and forced migration"],
  ["lonely", "Loneliness, isolation, and social exclusion"],
  ["military", "Military service, veterans, and trauma"],
  ["macro", "Organizations, policy, and macro practice"],
  ["poverty", "Poverty, inequality, and homelessness"],
  ["resil", "Resilience"],
  ["capital", "Social capital and neighborhoods"],
  ["stress", "Stress, coping, and support"],
  ["substance", "Substance use"],
  ["suicide", "Suicide"]
];
window.THEORY_LIB = {
  TPB: {
    type: "Theory",
    group: "health", name: "Theory of Planned Behavior",
    desc: "People act when they intend to, and intention grows from their attitudes, what important others expect, and how in control they feel.",
    chips: ["Attitude toward the behavior", "Subjective norm", "Perceived behavioral control", "Intention"],
    seminal: "Ajzen, I. (1991). The theory of planned behavior. *Organizational Behavior and Human Decision Processes, 50*(2), 179–211. https://doi.org/10.1016/0749-5978(91)90020-T",
    origins: [{cite: "Fishbein, M., & Ajzen, I. (1975). *Belief, attitude, intention, and behavior: An introduction to theory and research*. Addison-Wesley.", note: "The theory of reasoned action, which the theory of planned behavior extends by adding perceived behavioral control."}],
    revisions: [{tag: "Revised", cite: "Fishbein, M., & Ajzen, I. (2010). *Predicting and changing behavior: The reasoned action approach*. Psychology Press. https://doi.org/10.4324/9780203838020", note: "Restated as the reasoned action approach. Splits norms into injunctive (what others approve) and descriptive (what others do) and treats actual control as changing the strength of the intention–behavior link."}],
    props: [
      "A more favorable attitude toward the behavior leads to a stronger intention to perform it.",
      "A stronger subjective norm (perceived pressure from important others) leads to a stronger intention.",
      "More perceived behavioral control leads to a stronger intention.",
      "A stronger intention makes the behavior more likely.",
      "Perceived behavioral control predicts behavior directly, and strengthens the intention–behavior link, to the extent that it reflects actual control.",
      "How much attitude, norm, and control each matter differs across behaviors and populations."
    ]
  },
  HBM: {
    type: "Model",
    group: "health", name: "Health Belief Model",
    desc: "People take a health action when they feel at risk, see the problem as serious, and believe the action's benefits outweigh its barriers.",
    chips: ["Perceived susceptibility", "Perceived severity", "Perceived benefits", "Perceived barriers", "Cues to action", "Self-efficacy"],
    seminal: "Rosenstock, I. M. (1966). Why people use health services. *The Milbank Memorial Fund Quarterly, 44*(3, Pt. 2), 94–127. https://doi.org/10.2307/3348967",
    origins: [],
    revisions: [{tag: "Revised", cite: "Rosenstock, I. M., Strecher, V. J., & Becker, M. H. (1988). Social learning theory and the health belief model. *Health Education Quarterly, 15*(2), 175–183. https://doi.org/10.1177/109019818801500203", note: "Added self-efficacy as a separate concept."}],
    props: [
      "Higher perceived susceptibility (feeling at risk) makes action more likely.",
      "Higher perceived severity makes action more likely. Susceptibility and severity together make up perceived threat.",
      "Higher perceived benefits of the action make action more likely.",
      "Higher perceived barriers to the action make action less likely.",
      "Cues to action (symptoms or outside prompts) trigger action when readiness from perceived threat is already present.",
      "Higher self-efficacy makes action more likely (added in 1988)."
    ]
  },
  SCT: {
    type: "Theory",
    group: "health", name: "Social Cognitive Theory",
    desc: "People learn and act through confidence in their own ability, the results they expect, watching others, and the setting around them.",
    chips: ["Self-efficacy", "Outcome expectations", "Observational learning / modeling", "Social support"],
    seminal: "Bandura, A. (1986). *Social foundations of thought and action: A social cognitive theory*. Prentice-Hall.",
    origins: [
      {cite: "Bandura, A. (1977). *Social learning theory*. Prentice Hall.", note: "Earlier social learning theory."},
      {cite: "Bandura, A. (1977). Self-efficacy: Toward a unifying theory of behavioral change. *Psychological Review, 84*(2), 191–215. https://doi.org/10.1037/0033-295X.84.2.191", note: "First statement of self-efficacy."}
    ],
    revisions: [{tag: "Restated", cite: "Bandura, A. (2004). Health promotion by social cognitive means. *Health Education & Behavior, 31*(2), 143–164. https://doi.org/10.1177/1090198104263660", note: "Restated for health behavior: knowledge, self-efficacy, outcome expectations, health goals, and perceived facilitators and impediments, including social and structural ones."}],
    props: [
      "Higher self-efficacy makes the behavior more likely.",
      "More positive outcome expectations make the behavior more likely.",
      "Higher self-efficacy leads to more positive outcome expectations.",
      "Watching similar others succeed raises self-efficacy; one's own success raises it most.",
      "Person, behavior, and environment influence each other (reciprocal determinism)."
    ]
  },
  TTM: {
    type: "Model",
    group: "health", name: "Transtheoretical Model (Stages of Change)",
    desc: "People change a behavior by moving through stages, from not thinking about change to keeping it up.",
    chips: ["Stage of change", "Decisional balance", "Self-efficacy", "Temptation", "Processes of change"],
    seminal: "Prochaska, J. O., & DiClemente, C. C. (1983). Stages and processes of self-change of smoking: Toward an integrative model of change. *Journal of Consulting and Clinical Psychology, 51*(3), 390–395. https://doi.org/10.1037/0022-006X.51.3.390",
    origins: [],
    revisions: [
      {tag: "Revised", cite: "DiClemente, C. C., Prochaska, J. O., Fairhurst, S. K., Velicer, W. F., Velasquez, M. M., & Rossi, J. S. (1991). The process of smoking cessation: An analysis of precontemplation, contemplation, and preparation stages of change. *Journal of Consulting and Clinical Psychology, 59*(2), 295–304. https://doi.org/10.1037/0022-006X.59.2.295", note: "Added the preparation stage."},
      {tag: "Revised", cite: "Prochaska, J. O., & Velicer, W. F. (1997). The transtheoretical model of health behavior change. *American Journal of Health Promotion, 12*(1), 38–48. https://doi.org/10.4278/0890-1171-12.1.38", note: "Combined statement of the model: six stages (precontemplation, contemplation, preparation, action, maintenance, termination), ten processes of change, and decisional balance, self-efficacy, and temptation as markers of progress."}
    ],
    props: [
      "The pros of changing rise, and later the cons fall, as people move toward action.",
      "Self-efficacy increases as people move through the stages.",
      "Temptation to return to the old behavior decreases across the stages.",
      "Experiential processes are used most in early stages; behavioral processes are used most in action and maintenance."
    ],
    use: "This is a stage model. Arrows usually show what predicts moving to the next stage, or how stage relates to an outcome."
  },
  STRESSCOPE: {
    type: "Model",
    group: "stress", name: "Transactional Model of Stress and Coping",
    desc: "Stress depends on how a person appraises an event and their resources to handle it, and on how they cope.",
    chips: ["Stressor", "Primary appraisal (threat)", "Secondary appraisal (coping resources)", "Problem-focused coping", "Emotion-focused coping", "Distress"],
    seminal: "Lazarus, R. S., & Folkman, S. (1984). *Stress, appraisal, and coping*. Springer.",
    origins: [],
    revisions: [
      {tag: "Revised", cite: "Folkman, S. (1997). Positive psychological states and coping with severe stress. *Social Science & Medicine, 45*(8), 1207–1221. https://doi.org/10.1016/S0277-9536(97)00040-3", note: "Added a pathway in which meaning-focused coping (positive reappraisal, revising goals, spiritual beliefs) produces positive emotions that sustain coping during chronic stress."},
      {tag: "Extended", cite: "Folkman, S. (2008). The case for positive emotions in the stress process. *Anxiety, Stress, & Coping, 21*(1), 3–14. https://doi.org/10.1080/10615800701740457", note: "Reviews the evidence for the 1997 revision."}
    ],
    props: [
      "Appraising an event as harm, loss, or threat produces more stress; appraising it as a challenge produces less.",
      "Judging one's coping resources and options as adequate reduces stress.",
      "Appraisal links the event to the stress response (mediation).",
      "Coping, problem-focused and emotion-focused, affects adaptational outcomes such as well-being."
    ]
  },
  MINSTRESS: {
    type: "Theory",
    group: "stress", name: "Minority Stress Theory",
    desc: "Members of stigmatized minority groups face extra, socially based stress that harms mental health.",
    chips: ["Prejudice events (distal stress)", "Expected rejection", "Concealment", "Internalized stigma", "Social support", "Psychological distress"],
    seminal: "Meyer, I. H. (2003). Prejudice, social stress, and mental health in lesbian, gay, and bisexual populations: Conceptual issues and research evidence. *Psychological Bulletin, 129*(5), 674–697. https://doi.org/10.1037/0033-2909.129.5.674",
    origins: [{cite: "Meyer, I. H. (1995). Minority stress and mental health in gay men. *Journal of Health and Social Behavior, 36*(1), 38–56. https://doi.org/10.2307/2137286", note: "First empirical statement."}],
    revisions: [
      {tag: "Extended", cite: "Hatzenbuehler, M. L. (2009). How does sexual minority stigma “get under the skin”? A psychological mediation framework. *Psychological Bulletin, 135*(5), 707–730. https://doi.org/10.1037/a0016441", note: "Added general psychological mediators between stigma-related stress and psychopathology: emotion dysregulation, interpersonal problems, and cognitive processes such as rumination."},
      {tag: "Extended", cite: "Hendricks, M. L., & Testa, R. J. (2012). A conceptual framework for clinical work with transgender and gender nonconforming clients: An adaptation of the Minority Stress Model. *Professional Psychology: Research and Practice, 43*(5), 460–467. https://doi.org/10.1037/a0029597", note: "Adapted the model for gender minority people (gender minority stress)."},
      {tag: "Extended", cite: "Testa, R. J., Habarth, J., Peta, J., Balsam, K., & Bockting, W. (2015). Development of the Gender Minority Stress and Resilience Measure. *Psychology of Sexual Orientation and Gender Diversity, 2*(1), 65–77. https://doi.org/10.1037/sgd0000081", note: "Measure of gender minority stressors (such as non-affirmation of identity) and resilience (community connectedness, pride)."}
    ],
    props: [
      "Distal stressors (prejudice events, discrimination) lead to more distress.",
      "Proximal stressors (expected rejection, concealment, internalized stigma) lead to more distress.",
      "Distal stressors lead to more proximal stressors.",
      "Coping, social support, and characteristics of minority identity can weaken the link between stressors and distress (moderation)."
    ]
  },
  BUFFER: {
    type: "Hypothesis",
    group: "stress", name: "Social Support Buffering Hypothesis",
    desc: "Social support protects people from the harm of stress, and social connection is good for health in general.",
    chips: ["Stress", "Perceived social support", "Social integration", "Health"],
    seminal: "Cohen, S., & Wills, T. A. (1985). Stress, social support, and the buffering hypothesis. *Psychological Bulletin, 98*(2), 310–357. https://doi.org/10.1037/0033-2909.98.2.310",
    origins: [],
    revisions: [{tag: "Restated", cite: "Cohen, S. (2004). Social relationships and health. *American Psychologist, 59*(8), 676–684. https://doi.org/10.1037/0003-066X.59.8.676", note: "Update that separates social support, social integration, and negative social interactions."}],
    props: [
      "More stress leads to worse health.",
      "Perceived availability of support, especially support that matches what the stressor demands, weakens the stress–health link (buffering; moderation).",
      "Social integration (being part of a broad network) relates to better health at any level of stress (main effect)."
    ]
  },
  STRESSPROC: {
    type: "Model",
    group: "stress", name: "Stress Process Model",
    desc: "Life events create ongoing strains that wear down mastery and self-esteem, which leads to depression; social position shapes each step.",
    chips: ["Life events", "Chronic role strains", "Mastery", "Self-esteem", "Coping", "Social support", "Depression"],
    seminal: "Pearlin, L. I., Menaghan, E. G., Lieberman, M. A., & Mullan, J. T. (1981). The stress process. *Journal of Health and Social Behavior, 22*(4), 337–356. https://doi.org/10.2307/2136676",
    origins: [],
    revisions: [{tag: "Revised", cite: "Pearlin, L. I. (1989). The sociological study of stress. *Journal of Health and Social Behavior, 30*(3), 241–256. https://doi.org/10.2307/2136956", note: "Placed social statuses (class, gender, race, age) as the context for stress exposure, resources, and outcomes, and described stressors as linked primary and secondary stressors, the basis of the later concept of stress proliferation."}],
    props: [
      "Life events (such as job loss) lead to more chronic role strains (such as economic strain).",
      "Chronic strains lower mastery and self-esteem.",
      "Lower mastery and self-esteem lead to more depression (mediation).",
      "Coping and social support weaken the harm of strains, mainly by protecting mastery and self-esteem."
    ]
  },
  COR: {
    type: "Theory",
    group: "stress", name: "Conservation of Resources Theory",
    desc: "People work to get, keep, and protect resources; stress comes from losing them or the threat of losing them.",
    chips: ["Resource loss", "Resource gain", "Stress", "Resource investment"],
    seminal: "Hobfoll, S. E. (1989). Conservation of resources: A new attempt at conceptualizing stress. *American Psychologist, 44*(3), 513–524. https://doi.org/10.1037/0003-066X.44.3.513",
    origins: [],
    revisions: [
      {tag: "Revised", cite: "Hobfoll, S. E. (2001). The influence of culture, community, and the nested-self in the stress process: Advancing conservation of resources theory. *Applied Psychology, 50*(3), 337–421. https://doi.org/10.1111/1464-0597.00062", note: "Set out formal principles (primacy of loss, resource investment) and corollaries (loss spirals, gain spirals), and placed the person within family, community, and culture."},
      {tag: "Extended", cite: "Hobfoll, S. E., Halbesleben, J., Neveu, J.-P., & Westman, M. (2018). Conservation of resources in the organizational context: The reality of resources and their consequences. *Annual Review of Organizational Psychology and Organizational Behavior, 5*, 103–128. https://doi.org/10.1146/annurev-orgpsych-032117-104640", note: "Added the gain paradox and the desperation principle, and applied the theory to work settings."}
    ],
    props: [
      "Stress occurs when resources are threatened, lost, or not regained after being invested.",
      "Losing resources weighs more than gaining the same amount (primacy of loss).",
      "People invest resources to protect against loss and to gain more.",
      "People with fewer resources are more vulnerable to loss, and an early loss leads to more loss (loss spirals)."
    ]
  },
  ANDERSEN: {
    type: "Model",
    group: "health", name: "Andersen Behavioral Model of Health Services Use",
    desc: "Whether people use health services depends on what predisposes them, what enables them, and how much they need care.",
    chips: ["Predisposing characteristics", "Enabling resources", "Perceived need", "Evaluated need", "Health services use", "Health outcomes"],
    seminal: "Andersen, R. M. (1968). *A behavioral model of families' use of health services* (Research Series No. 25). Center for Health Administration Studies, University of Chicago.",
    origins: [],
    revisions: [
      {tag: "Revised", cite: "Andersen, R. M. (1995). Revisiting the behavioral model and access to medical care: Does it matter? *Journal of Health and Social Behavior, 36*(1), 1–10. https://doi.org/10.2307/2137284", note: "Added the environment (health care system and external environment), health behavior, outcomes (perceived health, evaluated health, satisfaction), and feedback loops."},
      {tag: "Revised", cite: "Gelberg, L., Andersen, R. M., & Leake, B. D. (2000). The Behavioral Model for Vulnerable Populations: Application to medical care use and outcomes for homeless people. *Health Services Research, 34*(6), 1273–1302.", note: "Added vulnerable-population factors such as residential history, competing needs, and victimization."}
    ],
    props: [
      "Predisposing characteristics (age, beliefs, social position) affect service use.",
      "Enabling resources (income, insurance, access) affect service use.",
      "Need, perceived and evaluated, affects service use and is usually the strongest predictor.",
      "Service use affects health outcomes (added in 1995).",
      "Outcomes feed back to predisposing characteristics, enabling resources, and need (added in 1995)."
    ]
  },
  FUNDCAUSE: {
    type: "Theory",
    group: "poverty", name: "Fundamental Cause Theory",
    desc: "Socioeconomic status keeps causing health inequality because people with more resources can avoid new risks and use new protections.",
    chips: ["Socioeconomic status", "Flexible resources", "Health"],
    seminal: "Link, B. G., & Phelan, J. (1995). Social conditions as fundamental causes of disease. *Journal of Health and Social Behavior, 35*(Extra Issue), 80–94. https://doi.org/10.2307/2626958",
    origins: [],
    revisions: [{tag: "Restated", cite: "Phelan, J. C., Link, B. G., & Tehranifar, P. (2010). Social conditions as fundamental causes of health inequalities: Theory, evidence, and policy implications. *Journal of Health and Social Behavior, 51*(1, Suppl.), S28–S40. https://doi.org/10.1177/0022146510383498", note: "Restated the four core features, reviewed the evidence, and added policy implications."}],
    props: [
      "Higher socioeconomic status leads to better health.",
      "Flexible resources (money, knowledge, power, prestige, useful social connections) link SES to health; controlling for any one set of risk factors will not remove the link, because the pathways change over time.",
      "The SES–health link persists even when the specific risk factors change.",
      "SES affects many diseases through many risk factors."
    ]
  },
  ECOL: {
    type: "Theory",
    group: "develop", name: "Ecological Systems Theory (Bioecological Model)",
    desc: "Development happens through everyday interactions in nested settings, from family to culture, over time.",
    chips: ["Proximal processes", "Microsystem", "Mesosystem", "Exosystem", "Macrosystem", "Chronosystem"],
    seminal: "Bronfenbrenner, U. (1979). *The ecology of human development: Experiments by nature and design*. Harvard University Press.",
    origins: [],
    revisions: [{tag: "Revised", cite: "Bronfenbrenner, U., & Morris, P. A. (2006). The bioecological model of human development. In R. M. Lerner & W. Damon (Eds.), *Handbook of child psychology: Vol. 1. Theoretical models of human development* (6th ed., pp. 793–828). John Wiley & Sons. https://doi.org/10.1002/9780470147658.chpsy0114", note: "Renamed the bioecological model (Process–Person–Context–Time). Shifted emphasis from settings to proximal processes and made time a full component."}],
    props: [
      "Proximal processes (regular, two-way interactions that grow more complex over time) drive development.",
      "The effect of proximal processes depends on the person's characteristics and the context (moderation).",
      "Settings the person is not in (exosystem) affect them through their immediate settings (mediation).",
      "Links between settings, such as home and school (mesosystem), affect development."
    ]
  },
  ATTACH: {
    type: "Theory",
    group: "develop", name: "Attachment Theory",
    desc: "Early bonds with caregivers shape how people regulate emotion and relate to others across life.",
    chips: ["Caregiver sensitivity", "Attachment security", "Internal working models", "Emotion regulation", "Relationship quality"],
    seminal: "Bowlby, J. (1969). *Attachment and loss: Vol. 1. Attachment*. Basic Books.",
    origins: [],
    revisions: [
      {tag: "Revised", cite: "Bowlby, J. (1982). *Attachment and loss: Vol. 1. Attachment* (2nd ed.). Basic Books. (Original work published 1969)", note: "Second edition with two new chapters and substantial revisions that bring in 15 years of later theory and research, including Ainsworth's."},
      {tag: "Extended", cite: "Ainsworth, M. D. S., Blehar, M. C., Waters, E., & Wall, S. (1978). *Patterns of attachment: A psychological study of the strange situation*. Erlbaum.", note: "Defined secure, avoidant, and resistant patterns."},
      {tag: "Extended", cite: "Hazan, C., & Shaver, P. (1987). Romantic love conceptualized as an attachment process. *Journal of Personality and Social Psychology, 52*(3), 511–524. https://doi.org/10.1037/0022-3514.52.3.511", note: "Extended the theory to adult romantic relationships."}
    ],
    props: [
      "More sensitive, responsive caregiving leads to more secure attachment.",
      "Secure attachment leads to better emotion regulation.",
      "Early experiences form internal working models that shape later relationships.",
      "Insecure attachment leads to more difficulty in later close relationships."
    ]
  },
  LIFECOURSE: {
    type: "Theory",
    group: "develop", name: "Life Course Theory",
    desc: "Lives are shaped by historical time and place, by when events happen, by linked lives, and by people's own choices.",
    chips: ["Historical time and place", "Timing of events", "Linked lives", "Human agency", "Cumulative disadvantage"],
    seminal: "Elder, G. H., Jr. (1998). The life course as developmental theory. *Child Development, 69*(1), 1–12. https://doi.org/10.1111/j.1467-8624.1998.tb06128.x",
    origins: [{cite: "Elder, G. H., Jr. (1974). *Children of the Great Depression: Social change in life experience*. University of Chicago Press.", note: "The study the theory grew from."}],
    revisions: [{tag: "Revised", cite: "Elder, G. H., Jr., Johnson, M. K., & Crosnoe, R. (2003). The emergence and development of life course theory. In J. T. Mortimer & M. J. Shanahan (Eds.), *Handbook of the life course* (pp. 3–19). Kluwer Academic/Plenum Publishers. https://doi.org/10.1007/978-0-306-48247-2_1", note: "Added a fifth principle, life-span development, to the four in Elder (1998)."}],
    props: [
      "The effect of an event depends on when in life it happens (timing; moderation by age at exposure).",
      "Lives are shaped by the historical time and place people live in.",
      "Events in one person's life affect the people linked to them (linked lives).",
      "People make choices within the limits of their circumstances (agency)."
    ]
  },
  DIATHESIS: {
    type: "Model",
    group: "stress", name: "Diathesis–Stress Model",
    desc: "Disorder develops when stress meets an existing vulnerability. A standard example of moderation.",
    chips: ["Stress", "Vulnerability (diathesis)", "Disorder"],
    seminal: "Monroe, S. M., & Simons, A. D. (1991). Diathesis-stress theories in the context of life stress research: Implications for the depressive disorders. *Psychological Bulletin, 110*(3), 406–425. https://doi.org/10.1037/0033-2909.110.3.406",
    origins: [
      {cite: "Meehl, P. E. (1962). Schizotaxia, schizotypy, schizophrenia. *American Psychologist, 17*(12), 827–838. https://doi.org/10.1037/h0041029", note: "Early vulnerability–stress idea."},
      {cite: "Zubin, J., & Spring, B. (1977). Vulnerability: A new view of schizophrenia. *Journal of Abnormal Psychology, 86*(2), 103–126. https://doi.org/10.1037/0021-843X.86.2.103", note: "Vulnerability model."}
    ],
    revisions: [{tag: "Challenged", cite: "Belsky, J., & Pluess, M. (2009). Beyond diathesis stress: Differential susceptibility to environmental influences. *Psychological Bulletin, 135*(6), 885–908. https://doi.org/10.1037/a0017376", note: "A challenge rather than a revision: differential susceptibility. The traits that make people more harmed by bad environments also make them benefit more from good ones."}],
    props: [
      "Stress leads to disorder mainly among people with a vulnerability (moderation).",
      "The stronger the vulnerability, the less stress is needed to trigger disorder.",
      "A vulnerability alone is usually not enough; some stress is needed, though with a strong vulnerability it may be small."
    ],
    use: "No single seminal statement exists. Monroe and Simons (1991) is the review most often cited for the model."
  },
  BOWEN: {
    type: "Theory",
    group: "develop", name: "Bowen Family Systems Theory",
    desc: "The family is an emotional unit; how well members separate thinking from feeling shapes anxiety and symptoms.",
    chips: ["Differentiation of self", "Chronic anxiety", "Triangles", "Multigenerational transmission", "Symptoms"],
    seminal: "Bowen, M. (1978). *Family therapy in clinical practice*. Jason Aronson.",
    origins: [],
    revisions: [{tag: "Extended", cite: "Kerr, M. E., & Bowen, M. (1988). *Family evaluation: An approach based on Bowen theory*. Norton.", note: "Expanded the theory in a natural-systems frame and developed chronic anxiety and differentiation."}],
    props: [
      "Higher differentiation of self leads to lower chronic anxiety and fewer symptoms.",
      "Higher chronic anxiety in the family leads to more symptoms in a family member.",
      "Under stress, a two-person relationship pulls in a third person (triangles).",
      "Patterns pass from one generation to the next (multigenerational transmission)."
    ]
  },
  STRAIN: {
    type: "Theory",
    group: "crime", name: "General Strain Theory",
    desc: "Strain causes negative emotions such as anger, which can lead to crime and delinquency.",
    chips: ["Strain", "Anger / negative emotion", "Coping resources", "Delinquent peers", "Delinquency"],
    seminal: "Agnew, R. (1992). Foundation for a general strain theory of crime and delinquency. *Criminology, 30*(1), 47–88. https://doi.org/10.1111/j.1745-9125.1992.tb01093.x",
    origins: [{cite: "Merton, R. K. (1938). Social structure and anomie. *American Sociological Review, 3*(5), 672–682. https://doi.org/10.2307/2084686", note: "Classic strain (anomie) theory."}],
    revisions: [{tag: "Revised", cite: "Agnew, R. (2001). Building on the foundation of general strain theory: Specifying the types of strain most likely to lead to crime and delinquency. *Journal of Research in Crime and Delinquency, 38*(4), 319–361. https://doi.org/10.1177/0022427801038004001", note: "Specified which strains most lead to crime: those seen as unjust, high in magnitude, tied to low social control, and creating pressure for criminal coping."}],
    props: [
      "Strain (failing to reach goals, losing something valued, facing negative treatment) leads to more negative emotion, especially anger.",
      "Negative emotion leads to more delinquency.",
      "Negative emotion links strain to delinquency (mediation).",
      "Coping resources, social support, delinquent peers, and limits on legal coping change the strength of the strain–delinquency link (moderation)."
    ]
  },
  BOND: {
    type: "Theory",
    group: "crime", name: "Social Control (Social Bond) Theory",
    desc: "People avoid delinquency when they are bonded to conventional society.",
    chips: ["Attachment", "Commitment", "Involvement", "Belief", "Delinquency"],
    seminal: "Hirschi, T. (1969). *Causes of delinquency*. University of California Press.",
    origins: [],
    revisions: [{tag: "Successor theory", cite: "Gottfredson, M. R., & Hirschi, T. (1990). *A general theory of crime*. Stanford University Press.", note: "A successor theory, not a revision: crime comes from low self-control formed in early childhood, combined with opportunity."}],
    props: [
      "Stronger attachment to others (parents, school) leads to less delinquency.",
      "A greater stake in conventional pursuits such as school and career (commitment) leads to less delinquency.",
      "More involvement in conventional activities leads to less delinquency.",
      "Stronger belief in conventional rules leads to less delinquency."
    ]
  },
  SOCLEARN: {
    type: "Theory",
    group: "crime", name: "Social Learning Theory of Crime (Akers)",
    desc: "Crime and deviance are learned through the people one associates with, their definitions, reinforcement, and imitation.",
    chips: ["Differential association", "Definitions favorable to deviance", "Differential reinforcement", "Imitation", "Deviance"],
    seminal: "Burgess, R. L., & Akers, R. L. (1966). A differential association-reinforcement theory of criminal behavior. *Social Problems, 14*(2), 128–147. https://doi.org/10.2307/798612",
    origins: [{cite: "Sutherland, E. H. (1947). *Principles of criminology* (4th ed.). J. B. Lippincott.", note: "Differential association theory, which Burgess and Akers restated in terms of reinforcement."}],
    revisions: [{tag: "Revised", cite: "Akers, R. L. (1998). *Social learning and social structure: A general theory of crime and deviance*. Northeastern University Press.", note: "Added the social structure–social learning (SSSL) model: structural factors affect behavior through the social learning variables."}],
    props: [
      "More association with people who favor deviance leads to more deviance.",
      "More definitions favorable to deviance lead to more deviance.",
      "More reinforcement for deviance than for conformity leads to more deviance.",
      "Imitating deviant models leads to more deviance, especially at first use.",
      "Social structure affects deviance through social learning (mediation)."
    ]
  },
  SDT: {
    type: "Theory",
    group: "health", name: "Self-Determination Theory",
    desc: "People are more motivated and well when their needs for autonomy, competence, and relatedness are met.",
    chips: ["Autonomy support", "Autonomy", "Competence", "Relatedness", "Autonomous motivation", "Well-being"],
    seminal: "Deci, E. L., & Ryan, R. M. (1985). *Intrinsic motivation and self-determination in human behavior*. Plenum. https://doi.org/10.1007/978-1-4899-2271-7",
    origins: [],
    revisions: [
      {tag: "Revised", cite: "Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. *American Psychologist, 55*(1), 68–78. https://doi.org/10.1037/0003-066X.55.1.68", note: "Restated the theory around three basic needs and a continuum of motivation from controlled to autonomous."},
      {tag: "Revised", cite: "Ryan, R. M., & Deci, E. L. (2017). *Self-determination theory: Basic psychological needs in motivation, development, and wellness*. Guilford Press. https://doi.org/10.1521/978.14625/28806", note: "Brought six mini-theories together and separated need frustration from low need satisfaction."}
    ],
    props: [
      "Autonomy-supportive settings lead to more need satisfaction.",
      "Satisfying needs for autonomy, competence, and relatedness leads to more autonomous motivation.",
      "Autonomous motivation leads to more persistence and well-being.",
      "Controlling settings frustrate basic needs, leading to more controlled motivation and lower well-being."
    ]
  },
  MILTRANS: {
    type: "Theory",
    group: "military", name: "Military Transition Theory",
    desc: "Leaving the military is a cultural transition; how it goes depends on what veterans bring to separation and the resources they have while managing it.",
    chips: ["Military culture and experiences", "Type of discharge", "Individual factors", "Organizational factors", "Community factors", "Transition outcomes"],
    seminal: "Castro, C. A., & Kintzle, S. (2014). Suicides in the military: The post-modern combat veteran and the Hemingway effect. *Current Psychiatry Reports, 16*(8), Article 460. https://doi.org/10.1007/s11920-014-0460-1",
    origins: [],
    revisions: [
      {tag: "Extended", cite: "Castro, C. A., Kintzle, S., & Hassan, A. M. (2015). The combat veteran paradox: Paradoxes and dilemmas encountered with reintegrating combat veterans and the agencies that support them. *Traumatology, 21*(4), 299–310. https://doi.org/10.1037/trm0000049", note: "Applies the theory to reintegration of combat veterans and the agencies that serve them."},
      {tag: "Restated", cite: "Kintzle, S., & Castro, C. A. (2018). Examining veteran transition to the workplace through military transition theory. In P. D. Harms & P. L. Perrewé (Eds.), *Occupational stress and well-being in military contexts* (Research in Occupational Stress and Well Being, Vol. 16, pp. 117–127). Emerald Publishing. https://doi.org/10.1108/S1479-355520180000016009", note: "Fullest stand-alone statement of the three phases, applied to work."}
    ],
    props: [
      "Transition has three phases: approaching the transition, managing the transition, and assessing the transition.",
      "Approaching: what veterans bring to separation (military culture and experiences, type of discharge, health, and how planned the separation was) shapes the transition.",
      "Managing: individual, organizational (VA services, education benefits, transition programs), and community resources shape how the transition goes.",
      "Assessing: transition outcomes are judged across work, family, health, general well-being, and community.",
      "An unplanned or involuntary separation makes the transition harder."
    ]
  },
  MORALINJ: {
    type: "Model",
    group: "military", name: "Moral Injury",
    desc: "Acts that violate deeply held moral beliefs, or betrayal by trusted leaders, can cause lasting guilt, shame, and self-condemnation.",
    chips: ["Potentially morally injurious events", "Self-blaming attributions", "Guilt", "Shame", "Withdrawal", "Self-condemnation", "Suicidality"],
    seminal: "Litz, B. T., Stein, N., Delaney, E., Lebowitz, L., Nash, W. P., Silva, C., & Maguen, S. (2009). Moral injury and moral repair in war veterans: A preliminary model and intervention strategy. *Clinical Psychology Review, 29*(8), 695–706. https://doi.org/10.1016/j.cpr.2009.07.003",
    origins: [{cite: "Shay, J. (1994). *Achilles in Vietnam: Combat trauma and the undoing of character*. Atheneum.", note: "Defined moral injury as betrayal of what is right by a person in legitimate authority in a high-stakes situation."}],
    revisions: [
      {tag: "Restated", cite: "Shay, J. (2014). Moral injury. *Psychoanalytic Psychology, 31*(2), 182–191. https://doi.org/10.1037/a0036090", note: "Restates the leadership-betrayal definition and contrasts it with the Litz et al. definition."},
      {tag: "Extended", cite: "Jinkerson, J. D. (2016). Defining and assessing moral injury: A syndrome perspective. *Traumatology, 22*(2), 122–130. https://doi.org/10.1037/trm0000069", note: "Defines moral injury as a syndrome: guilt, shame, spiritual or existential conflict, and loss of trust as core features."},
      {tag: "Revised", cite: "Litz, B. T., & Kerig, P. K. (2019). Introduction to the special issue on moral injury: Conceptual challenges, methodological issues, and clinical applications. *Journal of Traumatic Stress, 32*(3), 341–349. https://doi.org/10.1002/jts.22405", note: "Separates the event from the outcome; places moral challenges, moral stressors, and potentially morally injurious events on a continuum; distinguishes self-related events (guilt, shame) from other-related events such as betrayal (anger)."}
    ],
    props: [
      "Committing, failing to prevent, witnessing, or learning about an act that violates deeply held moral beliefs can lead to moral injury. Betrayal by trusted leaders is a second source (Shay).",
      "The clash between the act and one's moral beliefs produces lasting self-blaming attributions (\u201cI am bad\u201d).",
      "Self-blaming attributions generate guilt and shame.",
      "Shame leads to withdrawal, which blocks corrective experiences and sustains self-condemnation, demoralization, and self-harm, including suicidality.",
      "Repair comes through corrective interpersonal experiences, self-forgiveness, and reparative action."
    ]
  },
  FAMSTRESS: {
    type: "Theory",
    group: "develop", name: "Family Stress Theory (ABC-X and Double ABC-X)",
    desc: "Whether a stressor becomes a family crisis depends on the family's resources and how it defines the event. Built from studies of war separation and reunion; widely used with military families.",
    chips: ["Stressor event (A)", "Family resources (B)", "Family definition of the event (C)", "Crisis (X)", "Pile-up of demands", "Coping", "Family adaptation"],
    seminal: "Hill, R. (1949). *Families under stress: Adjustment to the crises of war separation and reunion*. Harper & Brothers.",
    origins: [],
    revisions: [
      {tag: "Restated", cite: "Hill, R. (1958). Generic features of families under stress. *Social Casework, 39*(2–3), 139–150. https://doi.org/10.1177/1044389458039002-318", note: "First explicit statement of the formula: A, interacting with B, interacting with C, produces X."},
      {tag: "Revised", cite: "McCubbin, H. I., & Patterson, J. M. (1983). The family stress process: The double ABCX model of adjustment and adaptation. *Marriage & Family Review, 6*(1–2), 7–37. https://doi.org/10.1300/J002v06n01_02", note: "The Double ABC-X model adds what happens after the crisis: pile-up of demands, adaptive resources, perception and coherence, coping, and adaptation."}
    ],
    props: [
      "A stressor event (A) produces a crisis (X) depending on the family's resources (B) and the family's definition of the event (C).",
      "More family resources lessen the crisis (moderation).",
      "Defining the event as manageable lessens the crisis.",
      "After a crisis, pile-up of demands, adaptive resources, the family's perception and sense of coherence, and coping lead to adaptation, which ranges from bonadaptation to maladaptation (Double ABC-X)."
    ]
  },
  MILTURN: {
    type: "Theory",
    group: "military", name: "Military Service as a Life Course Turning Point",
    desc: "Military service can redirect a life, especially for young people from disadvantaged backgrounds; its effect depends on when in life it comes.",
    chips: ["Age at entry", "Military service", "GI Bill education", "Socioeconomic achievement", "Disadvantaged background"],
    seminal: "Elder, G. H., Jr. (1986). Military times and turning points in men's lives. *Developmental Psychology, 22*(2), 233–245. https://doi.org/10.1037/0012-1649.22.2.233",
    origins: [],
    revisions: [
      {tag: "Extended", cite: "Elder, G. H., Jr. (1987). War mobilization and the life course: A cohort of World War II veterans. *Sociological Forum, 2*(3), 449–472. https://doi.org/10.1007/BF01106621", note: "Tests early versus late entry: early entry works as a moratorium; late entry disrupts family and career."},
      {tag: "Extended", cite: "Sampson, R. J., & Laub, J. H. (1996). Socioeconomic achievement in the life course of disadvantaged men: Military service as a turning point, circa 1940–1965. *American Sociological Review, 61*(3), 347–367. https://doi.org/10.2307/2096353", note: "Overseas duty, in-service training, and GI Bill education as pathways to later achievement among disadvantaged men."},
      {tag: "Extended", cite: "Wilmoth, J. M., & London, A. S. (Eds.). (2013). *Life course perspectives on military service*. Routledge. https://doi.org/10.4324/9780203079744", note: "Applies the life course perspective to military service more broadly."}
    ],
    props: [
      "Military service can be a turning point that separates young people from earlier disadvantage.",
      "Earlier entry brings more benefit and later entry more disruption of family and career (timing; moderation by age at entry).",
      "In-service training and GI Bill education lead to later socioeconomic achievement.",
      "Benefits are larger for men from disadvantaged backgrounds."
    ],
    use: "The evidence comes mostly from World War II and Korea-era cohorts of men. Check whether it applies to the all-volunteer force and to women."
  },
  EPT: {
    type: "Theory",
    group: "military", name: "Emotional Processing Theory (PTSD)",
    desc: "PTSD persists when the trauma memory is avoided; recovery comes from activating the memory and taking in corrective information. The basis of prolonged exposure therapy.",
    chips: ["Trauma memory (fear structure)", "Avoidance", "Corrective information", "Beliefs about danger and incompetence", "PTSD symptoms"],
    seminal: "Foa, E. B., & Kozak, M. J. (1986). Emotional processing of fear: Exposure to corrective information. *Psychological Bulletin, 99*(1), 20–35. https://doi.org/10.1037/0033-2909.99.1.20",
    origins: [],
    revisions: [
      {tag: "Extended", cite: "Foa, E. B., Steketee, G., & Rothbaum, B. O. (1989). Behavioral/cognitive conceptualizations of post-traumatic stress disorder. *Behavior Therapy, 20*(2), 155–176. https://doi.org/10.1016/S0005-7894(89)80067-X", note: "First applied the theory to PTSD: safe stimuli take on the meaning of danger."},
      {tag: "Extended", cite: "Foa, E. B., & Rothbaum, B. O. (1998). *Treating the trauma of rape: Cognitive-behavioral therapy for PTSD*. Guilford Press.", note: "Treatment application; describes the two erroneous beliefs."},
      {tag: "Revised", cite: "Foa, E. B., Huppert, J. D., & Cahill, S. P. (2006). Emotional processing theory: An update. In B. O. Rothbaum (Ed.), *Pathological anxiety: Emotional processing in etiology and treatment* (pp. 3–24). Guilford Press.", note: "Habituation within a session is no longer required; emphasis moves to change across sessions and change in meaning."}
    ],
    props: [
      "Fear is stored as a memory structure of stimuli, responses, and their meanings.",
      "Avoiding trauma reminders prevents the structure from being corrected and maintains PTSD.",
      "Activating the trauma memory and taking in information that does not fit it reduces fear (the basis of prolonged exposure).",
      "Beliefs that the world is extremely dangerous and that one is extremely incompetent maintain PTSD; recovery changes them."
    ]
  },
  IPTS: {
    type: "Theory",
    group: "suicide", name: "Interpersonal Theory of Suicide",
    desc: "Suicidal desire comes from feeling one does not belong and is a burden; acting on it requires an acquired capability for suicide.",
    chips: ["Thwarted belongingness", "Perceived burdensomeness", "Hopelessness", "Suicidal desire", "Capability for suicide", "Suicide attempt"],
    seminal: "Joiner, T. E. (2005). *Why people die by suicide*. Harvard University Press.",
    origins: [],
    revisions: [{tag: "Revised", cite: "Van Orden, K. A., Witte, T. K., Cukrowicz, K. C., Braithwaite, S. R., Selby, E. A., & Joiner, T. E., Jr. (2010). The interpersonal theory of suicide. *Psychological Review, 117*(2), 575–600. https://doi.org/10.1037/a0018697", note: "States four testable hypotheses; separates passive from active suicidal desire; adds hopelessness about belongingness and burdensomeness; defines capability as fearlessness about death plus higher pain tolerance."}],
    props: [
      "Thwarted belongingness leads to passive suicidal ideation.",
      "Perceived burdensomeness leads to passive suicidal ideation.",
      "Both together, with hopelessness that these states will change, lead to active suicidal desire.",
      "Suicidal desire leads to a lethal or near-lethal attempt only when the capability for suicide is present (moderation).",
      "Capability builds through habituation to repeated painful or frightening experiences, such as combat exposure or prior self-harm."
    ]
  },
  THREESTEP: {
    type: "Theory",
    group: "suicide", name: "Three-Step Theory (3ST)",
    desc: "Suicidal ideation comes from pain plus hopelessness; connectedness protects; capability decides whether ideation becomes an attempt.",
    chips: ["Psychological pain", "Hopelessness", "Connectedness", "Suicidal ideation", "Capability for suicide", "Suicide attempt"],
    seminal: "Klonsky, E. D., & May, A. M. (2015). The three-step theory (3ST): A new theory of suicide rooted in the \u201cideation-to-action\u201d framework. *International Journal of Cognitive Therapy, 8*(2), 114–129. https://doi.org/10.1521/ijct.2015.8.2.114",
    origins: [],
    revisions: [
      {tag: "Extended", cite: "Klonsky, E. D., Saffer, B. Y., & Bryan, C. J. (2018). Ideation-to-action theories of suicide: A conceptual and empirical update. *Current Opinion in Psychology, 22*, 38–43. https://doi.org/10.1016/j.copsyc.2017.07.020", note: "Reviews the interpersonal theory, the IMV model, and the 3ST together."},
      {tag: "Restated", cite: "Klonsky, E. D., Pachkowski, M. C., Shahnaz, A., & May, A. M. (2021). The three-step theory of suicide: Description, evidence, and some useful points of clarification. *Preventive Medicine, 152*(Pt. 1), Article 106549. https://doi.org/10.1016/j.ypmed.2021.106549", note: "Restates the three steps, reviews the evidence, and clarifies the concepts."}
    ],
    props: [
      "Pain (usually psychological) together with hopelessness leads to suicidal ideation; pain alone is not enough.",
      "Connectedness protects: ideation is strong when pain exceeds connectedness (moderation).",
      "Capability for suicide (dispositional, acquired, and practical) determines whether ideation moves to an attempt."
    ]
  },
  IMV: {
    type: "Model",
    group: "suicide", name: "Integrated Motivational–Volitional (IMV) Model",
    desc: "Defeat leads to entrapment, entrapment to suicidal ideation, and ideation to behavior; different factors strengthen or weaken each step.",
    chips: ["Defeat / humiliation", "Entrapment", "Suicidal ideation", "Suicidal behavior", "Threat-to-self moderators", "Motivational moderators", "Volitional moderators"],
    seminal: "O\u2019Connor, R. C. (2011). The integrated motivational-volitional model of suicidal behavior. *Crisis, 32*(6), 295–298. https://doi.org/10.1027/0227-5910/a000120",
    origins: [],
    revisions: [{tag: "Revised", cite: "O\u2019Connor, R. C., & Kirtley, O. J. (2018). The integrated motivational–volitional model of suicidal behaviour. *Philosophical Transactions of the Royal Society B: Biological Sciences, 373*(1754), Article 20170268. https://doi.org/10.1098/rstb.2017.0268", note: "Reviews the evidence since 2011 and updates the lists of moderators at each step."}],
    props: [
      "A pre-motivational phase (vulnerability, environment, life events) sets the context.",
      "Defeat or humiliation leads to entrapment; entrapment leads to suicidal ideation (motivational phase).",
      "Threat-to-self moderators (such as problem solving, coping, rumination) change the strength of the defeat–entrapment link.",
      "Motivational moderators (such as thwarted belongingness, perceived burdensomeness, future thinking, social support) change the strength of the entrapment–ideation link.",
      "Volitional moderators (such as capability, impulsivity, access to means, exposure to suicide, past suicidal behavior) change the strength of the ideation–behavior link."
    ],
    use: "A strong teaching example: it combines mediation (defeat to entrapment to ideation) with a moderator at every step."
  },
  FVT: {
    type: "Theory",
    group: "suicide", name: "Fluid Vulnerability Theory",
    desc: "Each person has a stable baseline level of suicide risk; acute risk rises above it in response to triggers and then falls.",
    chips: ["Baseline (chronic) risk", "Triggers", "Acute risk", "Prior suicide attempts", "Suicidal mode"],
    seminal: "Rudd, M. D. (2006). Fluid vulnerability theory: A cognitive approach to understanding the process of acute and chronic suicide risk. In T. E. Ellis (Ed.), *Cognition and suicide: Theory, research, and therapy* (pp. 355–368). American Psychological Association. https://doi.org/10.1037/11377-016",
    origins: [],
    revisions: [{tag: "Extended", cite: "Bryan, C. J., Butner, J. E., May, A. M., Rugo, K. F., Harris, J. A., Oakey, D. N., Rozek, D. C., & Bryan, A. O. (2020). Nonlinear change processes and the emergence of suicidal behavior: A conceptual model based on the fluid vulnerability theory of suicide. *New Ideas in Psychology, 57*, Article 100758. https://doi.org/10.1016/j.newideapsych.2019.100758", note: "Restates the theory as sudden, nonlinear change (a cusp catastrophe model), explaining suicidal behavior that appears without prior planning."}],
    props: [
      "Each person has a baseline (chronic) level of suicide risk that is relatively stable.",
      "Acute risk rises above baseline in response to triggers and is time-limited.",
      "People with multiple prior attempts have a higher baseline and are triggered more easily.",
      "A suicidal episode involves linked cognitive, emotional, physical, and behavioral systems (the suicidal mode)."
    ]
  },
  DURKHEIM: {
    type: "Theory",
    group: "suicide", name: "Durkheim\u2019s Theory of Suicide",
    desc: "Suicide rates depend on how strongly groups integrate and regulate their members.",
    chips: ["Social integration", "Social regulation", "Suicide rate"],
    seminal: "Durkheim, \u00c9. (1951). *Suicide: A study in sociology* (J. A. Spaulding & G. Simpson, Trans.; G. Simpson, Ed.). Free Press. (Original work published 1897)",
    origins: [],
    revisions: [{tag: "Review", cite: "Wray, M., Colen, C., & Pescosolido, B. (2011). The sociology of suicide. *Annual Review of Sociology, 37*, 505–528. https://doi.org/10.1146/annurev-soc-081309-150058", note: "Modern review of sociological work on suicide since Durkheim."}],
    props: [
      "Weak social integration leads to higher suicide rates (egoistic suicide).",
      "Excessive integration leads to altruistic suicide.",
      "Weak social regulation, as in sudden economic booms or crashes, leads to anomic suicide.",
      "Excessive regulation leads to fatalistic suicide (discussed only briefly by Durkheim)."
    ],
    use: "The theory explains suicide rates in groups (communities, occupations, nations), not one person's risk. Use it for group-level outcomes."
  },
  MASTEN: {
    type: "Framework",
    group: "resil", name: "Developmental Resilience (Ordinary Magic)",
    desc: "Resilience is common: it comes from ordinary human adaptive systems, such as caring relationships and self-regulation, that keep working under adversity.",
    chips: ["Adversity", "Caring adults", "Self-regulation", "Positive view of self", "Mastery motivation", "Positive adaptation"],
    seminal: "Masten, A. S. (2001). Ordinary magic: Resilience processes in development. *American Psychologist, 56*(3), 227–238. https://doi.org/10.1037/0003-066X.56.3.227",
    origins: [{cite: "Luthar, S. S., Cicchetti, D., & Becker, B. (2000). The construct of resilience: A critical evaluation and guidelines for future work. *Child Development, 71*(3), 543–562. https://doi.org/10.1111/1467-8624.00164", note: "Defines resilience as a process of positive adaptation despite significant adversity."}],
    revisions: [{tag: "Revised", cite: "Masten, A. S. (2014). *Ordinary magic: Resilience in development*. Guilford Press.", note: "Book-length statement from a systems view; adds family, school, community, and cultural systems."},
      {tag: "Revised", cite: "Masten, A. S. (2025). *Ordinary magic: Resilience in development* (2nd ed.). Guilford Press.", note: "Adds neurobiology, more international and non-Western findings, cultural identity, structural inequality, poverty, intergenerational trauma, and cascading disasters such as COVID-19."}],
    props: [
      "Resilience is positive adaptation despite significant adversity, not a rare trait.",
      "It comes from ordinary adaptive systems: close ties to competent, caring adults; thinking and self-regulation skills; a positive view of self; and motivation to master the environment.",
      "The greatest threats to development are those that damage these systems.",
      "A promotive factor helps at any level of risk (main effect); a protective factor weakens the effect of risk (moderation)."
    ]
  },
  RUTTER: {
    type: "Framework",
    group: "resil", name: "Protective Mechanisms (Rutter)",
    desc: "What matters is not a list of protective factors but the processes by which they change a person's response to risk.",
    chips: ["Risk", "Protective processes", "Negative chain reactions", "Self-esteem and self-efficacy", "Opportunities", "Outcome"],
    seminal: "Rutter, M. (1987). Psychosocial resilience and protective mechanisms. *American Journal of Orthopsychiatry, 57*(3), 316–331. https://doi.org/10.1111/j.1939-0025.1987.tb03541.x",
    origins: [],
    revisions: [{tag: "Restated", cite: "Rutter, M. (2012). Resilience as a dynamic concept. *Development and Psychopathology, 24*(2), 335–344. https://doi.org/10.1017/S0954579412000028", note: "Restates resilience as an inference from different responses to comparable adversity; reviews steeling (controlled stress builds resistance) versus sensitizing effects; adds gene–environment interaction."}],
    props: [
      "A protective process is identified by how it changes the response to risk; it may have no effect when risk is low (moderation).",
      "Protective processes reduce the impact of risk.",
      "They reduce negative chain reactions that follow risk exposure.",
      "They build and maintain self-esteem and self-efficacy.",
      "They open opportunities."
    ]
  },
  UNGAR: {
    type: "Framework",
    group: "resil", name: "Social-Ecological Resilience (Ungar)",
    desc: "Resilience depends on people finding resources and on their environments providing those resources in culturally meaningful ways.",
    chips: ["Adversity", "Navigation to resources", "Negotiation for resources", "Environmental resources", "Culture and context", "Well-being"],
    seminal: "Ungar, M. (2011). The social ecology of resilience: Addressing contextual and cultural ambiguity of a nascent construct. *American Journal of Orthopsychiatry, 81*(1), 1–17. https://doi.org/10.1111/j.1939-0025.2010.01067.x",
    origins: [{cite: "Ungar, M. (2008). Resilience across cultures. *British Journal of Social Work, 38*(2), 218–235. https://doi.org/10.1093/bjsw/bcl343", note: "First stated the navigate-and-negotiate definition."}],
    revisions: [],
    props: [
      "In the context of significant adversity, resilience is the capacity of people to navigate their way to psychological, social, cultural, and physical resources that sustain well-being.",
      "It is also the capacity of individuals and groups to negotiate for those resources to be provided in culturally meaningful ways.",
      "The higher the adversity, the more outcomes depend on the environment's ability to provide resources rather than on individual traits (Ungar's argument).",
      "What counts as a good outcome depends on culture and context."
    ],
    use: "Close to social work's person-in-environment view. Environmental resources often enter a model as causes or moderators."
  },
  BONANNO: {
    type: "Model",
    group: "resil", name: "Resilience Trajectories after Loss and Trauma (Bonanno)",
    desc: "After loss or trauma, most people stay steadily healthy; resilience is common and different from recovery.",
    chips: ["Potentially traumatic event", "Resilience trajectory", "Recovery trajectory", "Delayed trajectory", "Chronic trajectory"],
    seminal: "Bonanno, G. A. (2004). Loss, trauma, and human resilience: Have we underestimated the human capacity to thrive after extremely aversive events? *American Psychologist, 59*(1), 20–28. https://doi.org/10.1037/0003-066X.59.1.20",
    origins: [],
    revisions: [
      {tag: "Extended", cite: "Bonanno, G. A., Westphal, M., & Mancini, A. D. (2011). Resilience to loss and potential trauma. *Annual Review of Clinical Psychology, 7*, 511–535. https://doi.org/10.1146/annurev-clinpsy-032210-104526", note: "Reviews evidence; resilience has many determinants, including social support, resources, and flexible coping."},
      {tag: "Extended", cite: "Bonanno, G. A., Mancini, A. D., Horton, J. L., Powell, T. M., LeardMann, C. A., Boyko, E. J., Wells, T. S., Hooper, T. I., Gackstetter, G. D., & Smith, T. C. (2012). Trajectories of trauma symptoms and resilience in deployed US military service members: Prospective cohort study. *British Journal of Psychiatry, 200*(4), 317–323. https://doi.org/10.1192/bjp.bp.111.096552", note: "Military application: about 83% of single deployers and 85% of multiple deployers followed a low, stable (resilient) trajectory."}
    ],
    props: [
      "After loss or a potentially traumatic event, most people show a stable trajectory of healthy functioning (resilience).",
      "Resilience is different from recovery, in which functioning drops and then returns.",
      "Other common trajectories are delayed reactions and chronic distress.",
      "Resilience can come from several pathways, some unexpected, such as hardiness, self-enhancement, and positive emotion."
    ],
    use: "Trajectories are usually outcomes identified with longitudinal data. Causes and moderators predict which trajectory a person follows."
  },
  HARDINESS: {
    type: "Theory",
    group: "resil", name: "Hardiness",
    desc: "People with commitment, control, and challenge attitudes stay healthier under stress. Widely used in military research.",
    chips: ["Commitment", "Control", "Challenge", "Hardiness", "Life stress", "Health"],
    seminal: "Kobasa, S. C. (1979). Stressful life events, personality, and health: An inquiry into hardiness. *Journal of Personality and Social Psychology, 37*(1), 1–11. https://doi.org/10.1037/0022-3514.37.1.1",
    origins: [],
    revisions: [
      {tag: "Extended", cite: "Kobasa, S. C., Maddi, S. R., & Kahn, S. (1982). Hardiness and health: A prospective study. *Journal of Personality and Social Psychology, 42*(1), 168–177. https://doi.org/10.1037/0022-3514.42.1.168", note: "Prospective test: hardiness weakens the link between stress and illness."},
      {tag: "Extended", cite: "Bartone, P. T. (2006). Resilience under military operational stress: Can leaders influence hardiness? *Military Psychology, 18*(Suppl. 1), S131–S148. https://doi.org/10.1207/s15327876mp1803s_10", note: "Applies hardiness to military units and the role of leaders."}
    ],
    props: [
      "Hardiness is three linked attitudes: commitment (being involved rather than alienated), control (believing one can influence events), and challenge (seeing change as a chance to grow).",
      "People higher in hardiness stay healthier under heavy stress; hardiness weakens the stress–illness link (moderation).",
      "Hardiness works by making stressors seem less threatening and more meaningful, and by encouraging active coping (mediation).",
      "Under military operational stress, leaders can build hardiness by shaping how their units interpret stressful experiences (Bartone, 2006)."
    ]
  },
  FAMRESIL: {
    type: "Framework",
    group: "resil", name: "Family Resilience (Walsh)",
    desc: "Families cope with crisis through key processes in their beliefs, organization, and communication.",
    chips: ["Belief systems", "Organizational patterns", "Communication and problem solving", "Family adaptation"],
    seminal: "Walsh, F. (1996). The concept of family resilience: Crisis and challenge. *Family Process, 35*(3), 261–281. https://doi.org/10.1111/j.1545-5300.1996.00261.x",
    origins: [],
    revisions: [
      {tag: "Revised", cite: "Walsh, F. (2003). Family resilience: A framework for clinical practice. *Family Process, 42*(1), 1–18. https://doi.org/10.1111/j.1545-5300.2003.00001.x", note: "States the framework of three domains and nine key processes."},
      {tag: "Revised", cite: "Walsh, F. (2016). *Strengthening family resilience* (3rd ed.). Guilford Press.", note: "Current version of the framework."}
    ],
    props: [
      "Belief systems (making meaning of adversity, positive outlook, transcendence and spirituality) support family resilience.",
      "Organizational patterns (flexibility, connectedness, social and economic resources) support family resilience.",
      "Communication and problem solving (clarity, open emotional expression, collaborative problem solving) support family resilience.",
      "Strengthening these processes improves how the family and its members adapt to crisis."
    ]
  },
  PTG: {
    type: "Model",
    group: "resil", name: "Posttraumatic Growth",
    desc: "Struggling with a traumatic event that shakes core beliefs can lead to positive change, alongside distress.",
    chips: ["Challenge to core beliefs", "Intrusive rumination", "Deliberate rumination", "Supportive self-disclosure", "Posttraumatic growth"],
    seminal: "Tedeschi, R. G., & Calhoun, L. G. (2004). Posttraumatic growth: Conceptual foundations and empirical evidence. *Psychological Inquiry, 15*(1), 1–18. https://doi.org/10.1207/s15327965pli1501_01",
    origins: [{cite: "Tedeschi, R. G., & Calhoun, L. G. (1996). The Posttraumatic Growth Inventory: Measuring the positive legacy of trauma. *Journal of Traumatic Stress, 9*(3), 455–471. https://doi.org/10.1002/jts.2490090305", note: "The measure and its five domains."}],
    revisions: [{tag: "Revised", cite: "Tedeschi, R. G., Shakespeare-Finch, J., Taku, K., & Calhoun, L. G. (2018). *Posttraumatic growth: Theory, research, and applications*. Routledge. https://doi.org/10.4324/9781315527451", note: "Updated model; spiritual change became spiritual and existential change, measured by the expanded inventory (PTGI-X)."}],
    props: [
      "An event that challenges core beliefs first triggers intrusive rumination.",
      "Over time, deliberate rumination rebuilds beliefs and leads to growth (mediation).",
      "Self-disclosure promotes growth when others respond supportively.",
      "Growth appears in five domains: appreciation of life, relating to others, personal strength, new possibilities, and spiritual and existential change.",
      "Growth and distress can exist together."
    ]
  },
  PSYCHACHE: {
    type: "Theory",
    group: "suicide", name: "Psychache (Shneidman)",
    desc: "Suicide is caused by psychache, intense psychological pain from frustrated psychological needs, when the pain is judged unbearable.",
    chips: ["Frustrated psychological needs", "Psychache", "Perturbation", "Press (stressors)", "Suicide risk"],
    seminal: "Shneidman, E. S. (1993). *Suicide as psychache: A clinical approach to self-destructive behavior*. Jason Aronson.",
    origins: [
      {cite: "Shneidman, E. S. (1985). *Definition of suicide*. Wiley.", note: "Defined suicide and set out its common features."},
      {cite: "Shneidman, E. S. (1987). A psychological approach to suicide. In G. R. VandenBos & B. K. Bryant (Eds.), *Cataclysms, crises, and catastrophes: Psychology in action* (pp. 147–183). American Psychological Association. https://doi.org/10.1037/11106-004", note: "The cubic model: pain, perturbation, and press, each rated 1 to 5."}
    ],
    revisions: [{tag: "Restated", cite: "Shneidman, E. S. (1998). Further reflections on suicide and psychache. *Suicide and Life-Threatening Behavior, 28*(3), 245–250. https://doi.org/10.1111/j.1943-278X.1998.tb00854.x", note: "Restates psychache as the necessary condition for suicide."}],
    props: [
      "Psychache is intense psychological pain (hurt, anguish, shame, guilt, humiliation, loneliness, dread) that comes from frustrated vital psychological needs.",
      "Suicide occurs when psychache is experienced as unbearable and death is seen as the way to stop it.",
      "Suicide is most likely when pain, perturbation (agitation, constricted thinking), and press (outside and imagined stressors) are all high (cubic model).",
      "Lowering any one of these, especially psychache, lowers suicide risk."
    ]
  },
  SELFMED: {
    type: "Hypothesis",
    group: "substance", name: "Self-Medication Hypothesis",
    desc: "People use substances to relieve painful emotional states, and they prefer the drug that fits their main distress.",
    chips: ["Painful emotional states", "Self-regulation difficulties", "Drug of choice", "Substance use"],
    seminal: "Khantzian, E. J. (1985). The self-medication hypothesis of addictive disorders: Focus on heroin and cocaine dependence. *American Journal of Psychiatry, 142*(11), 1259–1264. https://doi.org/10.1176/ajp.142.11.1259",
    origins: [],
    revisions: [{tag: "Revised", cite: "Khantzian, E. J. (1997). The self-medication hypothesis of substance use disorders: A reconsideration and recent applications. *Harvard Review of Psychiatry, 4*(5), 231–244. https://doi.org/10.3109/10673229709030550", note: "Widened the theory to general self-regulation difficulties (emotions, self-esteem, relationships, self-care), made suffering rather than pleasure the core motive, and applied it to PTSD, ADHD, and schizophrenia."}],
    props: [
      "People use substances to relieve painful emotional states.",
      "Drug choice is preferential, not random: opioids calm rage and aggression; stimulants relieve depression and low energy; sedatives and alcohol loosen people who are rigid or overcontrolled.",
      "Difficulty regulating emotions, self-esteem, relationships, and self-care raises vulnerability (mainly the 1997 version)."
    ]
  },
  BRAINDIS: {
    type: "Model",
    group: "substance", name: "Brain Disease Model of Addiction",
    desc: "Repeated drug use changes brain circuits for reward, stress, and self-control, which drives compulsive use.",
    chips: ["Repeated drug use", "Reward circuit changes", "Stress system changes", "Impaired self-control", "Compulsive use"],
    seminal: "Leshner, A. I. (1997). Addiction is a brain disease, and it matters. *Science, 278*(5335), 45–47. https://doi.org/10.1126/science.278.5335.45",
    origins: [],
    revisions: [
      {tag: "Revised", cite: "Volkow, N. D., Koob, G. F., & McLellan, A. T. (2016). Neurobiologic advances from the brain disease model of addiction. *New England Journal of Medicine, 374*(4), 363–371. https://doi.org/10.1056/NEJMra1511480", note: "Tied the model to a three-stage cycle linked to brain regions, and acknowledged social and environmental factors."},
      {tag: "Revised", cite: "Heilig, M., MacKillop, J., Martinez, D., Rehm, J., Leggio, L., & Vanderschuren, L. J. M. J. (2021). Addiction as a brain disease revised: Why it still matters, and the need for consilience. *Neuropsychopharmacology, 46*(10), 1715–1723. https://doi.org/10.1038/s41386-020-00950-y", note: "Defends and revises the model in response to critics."},
      {tag: "Challenged", cite: "Lewis, M. (2018). Brain change in addiction as learning, not disease. *New England Journal of Medicine, 379*(16), 1551–1560. https://doi.org/10.1056/NEJMra1602872", note: "Argues the brain changes are normal learning from repeated, motivated behavior, not disease."}
    ],
    props: [
      "Repeated drug use changes brain circuits for reward, stress, and self-control.",
      "These changes drive compulsive use despite harm.",
      "Addiction cycles through three stages: binge/intoxication, withdrawal/negative affect, and preoccupation/anticipation (craving) (Volkow et al., 2016)."
    ]
  },
  INCENTIVE: {
    type: "Theory",
    group: "substance", name: "Incentive-Sensitization Theory",
    desc: "Repeated drug use makes the brain 'want' drugs more and more, even when 'liking' does not grow.",
    chips: ["Repeated drug use", "Incentive salience (wanting)", "Drug cues", "Craving", "Relapse"],
    seminal: "Robinson, T. E., & Berridge, K. C. (1993). The neural basis of drug craving: An incentive-sensitization theory of addiction. *Brain Research Reviews, 18*(3), 247–291. https://doi.org/10.1016/0165-0173(93)90013-P",
    origins: [],
    revisions: [{tag: "Revised", cite: "Robinson, T. E., & Berridge, K. C. (2008). The incentive sensitization theory of addiction: Some current issues. *Philosophical Transactions of the Royal Society B: Biological Sciences, 363*(1507), 3137–3146. https://doi.org/10.1098/rstb.2008.0093", note: "Added the role of context and individual differences, and combined sensitized wanting with loss of executive control."}],
    props: [
      "Repeated drug use sensitizes brain systems that give drugs and drug cues incentive salience (wanting).",
      "Wanting grows while liking does not.",
      "Drug cues trigger craving and relapse, most strongly in settings linked to past use.",
      "Sensitization lasts long after drug use stops."
    ]
  },
  PROBBEH: {
    type: "Theory",
    group: "substance", name: "Problem Behavior Theory",
    desc: "Adolescent problem behaviors cluster together and come from personality, the perceived environment, and behavior.",
    chips: ["Personality system", "Perceived environment system", "Behavior system", "Risk factors", "Protective factors", "Problem behavior"],
    seminal: "Jessor, R., & Jessor, S. L. (1977). *Problem behavior and psychosocial development: A longitudinal study of youth*. Academic Press.",
    origins: [],
    revisions: [{tag: "Revised", cite: "Jessor, R. (1991). Risk behavior in adolescence: A psychosocial framework for understanding and action. *Journal of Adolescent Health, 12*(8), 597–605. https://doi.org/10.1016/1054-139X(91)90007-K", note: "Broadened problem behavior to risk behavior within several domains of risk and protective factors."}],
    props: [
      "Problem behaviors (substance use, early sexual activity, delinquency) cluster together.",
      "They come from three systems: personality, perceived environment, and behavior.",
      "Protective factors lower problem behavior directly and also weaken the effect of risk (moderation; framed in 1991, tested later)."
    ]
  },
  RISKPROT: {
    type: "Framework",
    group: "substance", name: "Risk and Protective Factor Framework",
    desc: "Substance problems are predicted by risk factors across life domains and buffered by protective factors. The basis of Communities That Care.",
    chips: ["Individual and peer risk", "Family risk", "School risk", "Community risk", "Protective factors", "Substance use"],
    seminal: "Hawkins, J. D., Catalano, R. F., & Miller, J. Y. (1992). Risk and protective factors for alcohol and other drug problems in adolescence and early adulthood: Implications for substance abuse prevention. *Psychological Bulletin, 112*(1), 64–105. https://doi.org/10.1037/0033-2909.112.1.64",
    origins: [],
    revisions: [],
    props: [
      "Substance problems are predicted by risk factors in individual and peer, family, school, and community domains.",
      "Risk accumulates: more risk factors mean a higher likelihood of use.",
      "Protective factors (bonding, clear healthy standards, opportunities and recognition) buffer exposure to risk (moderation).",
      "Prevention should target changeable risk factors before use begins."
    ]
  },
  RELAPSE: {
    type: "Model",
    group: "substance", name: "Relapse Prevention Model",
    desc: "Relapse depends on how a person copes with high-risk situations and how they interpret a first lapse.",
    chips: ["High-risk situation", "Coping response", "Self-efficacy", "Outcome expectancies", "Lapse", "Abstinence violation effect", "Relapse"],
    seminal: "Marlatt, G. A., & Gordon, J. R. (Eds.). (1985). *Relapse prevention: Maintenance strategies in the treatment of addictive behaviors*. Guilford Press.",
    origins: [],
    revisions: [{tag: "Revised", cite: "Witkiewitz, K., & Marlatt, G. A. (2004). Relapse prevention for alcohol and drug problems: That was Zen, this is Tao. *American Psychologist, 59*(4), 224–235. https://doi.org/10.1037/0003-066X.59.4.224", note: "Replaced the linear chain with a dynamic, nonlinear model in which distal risks and proximal responses interact, so small changes can trigger sudden relapse."}],
    props: [
      "Relapse begins with a high-risk situation.",
      "An effective coping response raises self-efficacy and lowers relapse risk.",
      "No coping response lowers self-efficacy and, with positive outcome expectancies, leads to a lapse.",
      "The abstinence violation effect (blaming the lapse on a stable personal failure) turns a lapse into relapse.",
      "Relapse is a dynamic, nonlinear process in which distal risks and proximal triggers interact (2004)."
    ]
  },
  CULTPOV: {
    type: "Theory",
    group: "poverty", name: "Culture of Poverty", critical: false,
    desc: "Lewis argued that long-term poverty produces shared adaptations that can pass across generations. Widely criticized and later revised.",
    chips: ["Long-term poverty", "Present-time orientation", "Fatalism", "Weak ties to institutions", "Structural conditions"],
    seminal: "Lewis, O. (1966). The culture of poverty. *Scientific American, 215*(4), 19–25. https://doi.org/10.1038/scientificamerican1066-19",
    origins: [{cite: "Lewis, O. (1959). *Five families: Mexican case studies in the culture of poverty*. Basic Books.", note: "First use of the term."}],
    revisions: [{tag: "Revised", cite: "Small, M. L., Harding, D. J., & Lamont, M. (2010). Reconsidering culture and poverty. *The Annals of the American Academy of Political and Social Science, 629*(1), 6–27. https://doi.org/10.1177/0002716210362077", note: "Treats culture as frames, repertoires, and narratives that respond to structural conditions and vary among poor people, not as a fixed way of life."}],
    props: [
      "People in long-term poverty develop shared adaptations: present-time orientation, fatalism, and weak participation in mainstream institutions (Lewis).",
      "Lewis held that these adaptations pass to children early and can keep people poor even when opportunities improve.",
      "People draw on cultural frames and repertoires in response to structural conditions, and these vary (2010 revision)."
    ],
    use: "Critics argue the original thesis blames poor people and hides structural causes. If you use it, say which version and engage the critique."
  },
  WILSON: {
    type: "Theory",
    group: "poverty", name: "Concentrated Poverty (Wilson)",
    desc: "The loss of urban jobs and the departure of working families concentrate poverty and isolate residents from mainstream networks.",
    chips: ["Job loss (deindustrialization)", "Joblessness", "Out-migration of working families", "Social isolation", "Concentrated poverty", "Neighborhood outcomes"],
    seminal: "Wilson, W. J. (1987). *The truly disadvantaged: The inner city, the underclass, and public policy*. University of Chicago Press.",
    origins: [],
    revisions: [{tag: "Revised", cite: "Wilson, W. J. (1996). *When work disappears: The world of the new urban poor*. Knopf.", note: "Made joblessness, the disappearance of work, the central mechanism."}],
    props: [
      "The loss of industrial jobs from cities raises joblessness among inner-city residents.",
      "Out-migration of middle-class and working families removes institutions, role models, and job networks, isolating residents from mainstream networks.",
      "Concentrated poverty worsens outcomes beyond a family's own poverty (neighborhood effects).",
      "Structural joblessness is the main driver; cultural responses are real but secondary and arise from social isolation."
    ]
  },
  CUMINEQ: {
    type: "Theory",
    group: "poverty", name: "Cumulative Inequality Theory",
    desc: "Advantage and disadvantage build up over the life course and shape health and survival in later life.",
    chips: ["Early disadvantage", "Exposure to risk", "Resources", "Human agency", "Perceived trajectory", "Later-life health"],
    seminal: "Ferraro, K. F., & Shippee, T. P. (2009). Aging and cumulative inequality: How does inequality get under the skin? *The Gerontologist, 49*(3), 333–343. https://doi.org/10.1093/geront/gnp034",
    origins: [{cite: "Dannefer, D. (2003). Cumulative advantage/disadvantage and the life course: Cross-fertilizing age and social science theory. *The Journals of Gerontology: Series B: Psychological Sciences and Social Sciences, 58*(6), S327–S337. https://doi.org/10.1093/geronb/58.6.S327", note: "Cumulative advantage/disadvantage theory, which cumulative inequality theory extends."}],
    revisions: [],
    props: [
      "Social systems generate inequality, which shows up over the life course.",
      "Disadvantage increases exposure to risk; advantage increases exposure to opportunity.",
      "Life course trajectories are shaped by accumulated risk, available resources, and human agency.",
      "How people perceive their life trajectories influences the trajectories that follow.",
      "Cumulative inequality can lead to early death, so nonrandom survival can make inequality look smaller in later life."
    ]
  },
  SCARCITY: {
    type: "Theory",
    group: "poverty", name: "Scarcity (Cognitive Load of Poverty)",
    desc: "Having too little captures attention and taxes mental bandwidth, which can lead to choices that deepen poverty.",
    chips: ["Financial scarcity", "Tunneling", "Cognitive bandwidth", "Decision making"],
    seminal: "Mani, A., Mullainathan, S., Shafir, E., & Zhao, J. (2013). Poverty impedes cognitive function. *Science, 341*(6149), 976–980. https://doi.org/10.1126/science.1238041",
    origins: [],
    revisions: [
      {tag: "Extended", cite: "Mullainathan, S., & Shafir, E. (2013). *Scarcity: Why having too little means so much*. Times Books.", note: "Book-length statement of the theory."},
      {tag: "Challenged", cite: "O’Donnell, M., Dev, A. S., Antonoplis, S., Baum, S. M., Benedetti, A. H., Brown, N. D., Carrillo, B., Choi, A. L., Connor, P., Donnelly, K., Ellwood-Lowe, M. E., Foushee, R., Jansen, R., Jarvis, S. N., Lundell-Creagh, R., Ocampo, J. M., Okafor, G. N., Azad, Z. R., Rosenblum, M., . . . Nelson, L. D. (2021). Empirical audit and review and an assessment of evidentiary value in research on the psychological consequences of scarcity. *Proceedings of the National Academy of Sciences, 118*(44), Article e2103313118. https://doi.org/10.1073/pnas.2103313118", note: "In close replications of 20 studies, about half the effects replicated, usually smaller than the originals."}
    ],
    props: [
      "Scarcity captures attention (tunneling): it helps with the pressing need but neglects other things.",
      "Scarcity taxes cognitive bandwidth, temporarily reducing measured fluid intelligence and executive control. These are state effects, not lower ability.",
      "Reduced bandwidth can lead to choices that deepen poverty.",
      "Reducing scarcity frees bandwidth."
    ],
    use: "The size and robustness of these effects are contested (O’Donnell et al., 2021)."
  },
  CAPABILITY: {
    type: "Approach",
    group: "poverty", name: "Capability Approach",
    desc: "Poverty is the lack of real freedom to be and do what one values, not only low income.",
    chips: ["Resources", "Conversion factors", "Capabilities", "Functionings", "Well-being"],
    seminal: "Sen, A. (1999). *Development as freedom*. Knopf.",
    origins: [{cite: "Sen, A. (1985). *Commodities and capabilities*. North-Holland.", note: "First formal statement."}],
    revisions: [{tag: "Extended", cite: "Nussbaum, M. C. (2011). *Creating capabilities: The human development approach*. Belknap Press of Harvard University Press. https://doi.org/10.4159/harvard.9780674061200", note: "Adds a list of 10 central capabilities, each with a threshold, as a basis for justice claims."}],
    props: [
      "Poverty is the deprivation of capabilities (real freedoms to be and do what one values), not only low income.",
      "Functionings are what a person actually achieves; capabilities are what that person could achieve.",
      "Personal, social, and environmental conversion factors affect how resources become capabilities (moderation).",
      "The same income yields different capabilities for different people."
    ]
  },
  RANK: {
    type: "Model",
    group: "poverty", name: "Structural Vulnerability Model of Poverty (Rank)",
    desc: "Individual deficits explain who is poor; structural failings explain why poverty exists. Poverty is a mainstream life course risk.",
    chips: ["Human capital", "Labor market opportunities", "Safety net", "Poverty"],
    seminal: "Rank, M. R., Yoon, H.-S., & Hirschl, T. A. (2003). American poverty as a structural failing: Evidence and arguments. *Journal of Sociology and Social Welfare, 30*(4), Article 2. https://doi.org/10.15453/0191-5096.2936",
    origins: [],
    revisions: [],
    props: [
      "Individual deficits, such as low human capital, explain who is at greatest risk of poverty.",
      "Structural failings explain why poverty exists: too few jobs that pay a living wage and a weak safety net.",
      "The labor market works like musical chairs: the number of good positions, not individual effort, sets how much poverty there is.",
      "Most Americans spend at least one year in poverty during adulthood, so poverty is a mainstream life course risk."
    ]
  },
  HOMELESS: {
    type: "Framework",
    group: "poverty", name: "Structural and Individual Causes of Homelessness",
    desc: "Homelessness results from structural conditions interacting with individual vulnerabilities; no single cause is necessary or sufficient.",
    chips: ["Housing costs", "Labor market", "Welfare policy", "Individual vulnerabilities", "Homelessness"],
    seminal: "Fitzpatrick, S. (2005). Explaining homelessness: A critical realist perspective. *Housing, Theory and Society, 22*(1), 1–17. https://doi.org/10.1080/14036090510034563",
    origins: [{cite: "McChesney, K. Y. (1990). Family homelessness: A systemic problem. *Journal of Social Issues, 46*(4), 191–205. https://doi.org/10.1111/j.1540-4560.1990.tb01806.x", note: "The musical chairs analogy."}],
    revisions: [
      {tag: "Extended", cite: "O’Flaherty, B. (2004). Wrong person and wrong place: For homelessness, the conjunction is what matters. *Journal of Housing Economics, 13*(1), 1–15. https://doi.org/10.1016/j.jhe.2003.12.001", note: "Economic statement: homelessness arises where individual circumstances and housing-market conditions meet."},
      {tag: "Extended", cite: "Shinn, M. (2007). International homelessness: Policy, socio-cultural, and individual perspectives. *Journal of Social Issues, 63*(3), 657–677. https://doi.org/10.1111/j.1540-4560.2007.00529.x", note: "Compares countries: welfare regimes and culture shape homelessness rates."}
    ],
    props: [
      "Homelessness results from structural factors (housing costs, labor markets, welfare policy) interacting with individual vulnerabilities (mental illness, substance use, relationship breakdown).",
      "Structural conditions, such as a shortage of affordable housing, set how many people become homeless; individual vulnerabilities shape who loses out (musical chairs; McChesney, 1990).",
      "Causes operate at economic, housing, interpersonal, and individual levels; their effects depend on each other, and no single factor is necessary or sufficient (Fitzpatrick)."
    ]
  },
  SHELTER: {
    type: "Typology",
    group: "poverty", name: "Typology of Homelessness by Shelter Use (Kuhn & Culhane)",
    desc: "People who use shelters fall into transitional, episodic, and chronic groups that need different help. The basis of 'chronic homelessness' and Housing First targeting.",
    chips: ["Transitional homelessness", "Episodic homelessness", "Chronic homelessness", "Disability", "Shelter use"],
    seminal: "Kuhn, R., & Culhane, D. P. (1998). Applying cluster analysis to test a typology of homelessness by pattern of shelter utilization: Results from the analysis of administrative data. *American Journal of Community Psychology, 26*(2), 207–232. https://doi.org/10.1023/A:1022176402357",
    origins: [],
    revisions: [],
    props: [
      "Shelter users fall into three groups: transitional (about 80%; one short stay), episodic (about 10%; repeated stays), and chronic (about 10%; long stays).",
      "The chronic group uses about half of all shelter days.",
      "The chronic and episodic groups have higher rates of disability, mental illness, and substance use.",
      "Each group needs a different response: prevention and rapid rehousing for transitional users, permanent supportive housing for chronic users."
    ],
    use: "An empirical typology. The groups often serve as an outcome or as groups to compare (moderation)."
  },
  FEMSTAND: {
    type: "Critical perspective",
    group: "power", name: "Feminist Standpoint Theory", critical: true,
    desc: "Knowledge comes from social position; starting from women's and other marginalized groups' lives reveals how power works.",
    chips: ["Gender as social structure", "Gendered division of labor", "Caregiving labor", "Women's everyday experience"],
    seminal: "Hartsock, N. C. M. (1983). The feminist standpoint: Developing the ground for a specifically feminist historical materialism. In S. Harding & M. B. Hintikka (Eds.), *Discovering reality: Feminist perspectives on epistemology, metaphysics, methodology, and philosophy of science* (pp. 283–310). D. Reidel. https://doi.org/10.1007/0-306-48017-4_15",
    origins: [],
    revisions: [
      {tag: "Extended", cite: "Smith, D. E. (1987). *The everyday world as problematic: A feminist sociology*. Northeastern University Press.", note: "Sociology from the standpoint of women; the basis of institutional ethnography."},
      {tag: "Extended", cite: "Harding, S. (Ed.). (2004). *The feminist standpoint theory reader: Intellectual and political controversies*. Routledge.", note: "Standard collection of the debates, including strong objectivity."},
      {tag: "Extended", cite: "Dominelli, L. (2002). *Feminist social work theory and practice*. Palgrave Macmillan. https://doi.org/10.1007/978-0-230-62820-5", note: "Applies feminist theory to social work practice."}
    ],
    props: [
      "All knowledge comes from a social position; no view is from nowhere.",
      "Groups with less power can see how power works in ways dominant groups cannot. This view is achieved through critical reflection and collective struggle, not automatic.",
      "Gender is a social structure of power, organized through the division of paid and unpaid labor, not only an individual trait.",
      "Research should start from women's everyday lives and the institutions that organize them, and aim at change (Smith).",
      "Starting from marginalized lives produces stronger objectivity, not weaker (Harding)."
    ],
    use: "These are tenets, not arrows. In a model, the theory frames gender as a structural cause or context (for example, the gendered division of caregiving labor) rather than only a demographic moderator, and it justifies using women's own accounts to define concepts and paths."
  },
  QUEER: {
    type: "Critical perspective",
    group: "power", name: "Queer Theory", critical: true,
    desc: "Gender and sexuality are socially produced, and categories of identity are unstable and should be questioned.",
    chips: ["Heteronormativity", "Gender performativity", "Identity categories"],
    seminal: "Butler, J. (1990). *Gender trouble: Feminism and the subversion of identity*. Routledge.",
    origins: [{cite: "de Lauretis, T. (1991). Queer theory: Lesbian and gay sexualities: An introduction. *differences: A Journal of Feminist Cultural Studies, 3*(2), iii–xviii. https://doi.org/10.1215/10407391-3-2-iii", note: "Coined the term queer theory."}],
    revisions: [
      {tag: "Extended", cite: "Sedgwick, E. K. (1990). *Epistemology of the closet*. University of California Press.", note: "The homosexual/heterosexual binary and the instability of categories."},
      {tag: "Extended", cite: "Warner, M. (Ed.). (1993). *Fear of a queer planet: Queer politics and social theory*. University of Minnesota Press.", note: "Carries queer theory into social theory; standard source for heteronormativity."},
      {tag: "Extended", cite: "Hicks, S., & Jeyasingham, D. (2016). Social work, queer theory and after: A genealogy of sexuality theory in neo-liberal times. *British Journal of Social Work, 46*(8), 2357–2373. https://doi.org/10.1093/bjsw/bcw103", note: "Critique and application in social work."}
    ],
    props: [
      "Gender and sexuality are produced through social and discursive practices; they are not fixed or natural.",
      "Gender is performative (Butler): it is constituted through repeated, socially regulated acts. Performative does not mean a chosen performance.",
      "Heteronormativity treats heterosexuality and binary gender as the default and marks other identities as deviant (Warner).",
      "Identity categories are unstable and historically produced; research should question them rather than take them as given (Sedgwick; Butler)."
    ],
    use: "These are tenets, not arrows. Queer theory guides how sexual orientation and gender are measured, and whether to use fixed categories at all. Pair it with minority stress theory, which supplies testable paths. It often supports qualitative or critical designs."
  },
  CONFLICT: {
    type: "Critical perspective",
    group: "power", name: "Conflict Theory", critical: true,
    desc: "Society is made up of groups competing for scarce resources and power; inequality and conflict drive social change.",
    chips: ["Class position", "Income inequality", "Authority", "Policy"],
    seminal: "Dahrendorf, R. (1959). *Class and class conflict in industrial society*. Stanford University Press. (Original work published 1957)",
    origins: [{cite: "Marx, K., & Engels, F. (1978). Manifesto of the Communist Party. In R. C. Tucker (Ed.), *The Marx-Engels reader* (2nd ed.). W. W. Norton. (Original work published 1848)", note: "Classical root of conflict theory."}],
    revisions: [{tag: "Extended", cite: "Collins, R. (1975). *Conflict sociology: Toward an explanatory science*. Academic Press.", note: "Systematic version grounded in interaction and organizations; treats ideas and legitimacy as resources in conflict."}],
    props: [
      "Society consists of groups competing for scarce resources: wealth, power, and prestige.",
      "Groups with power shape institutions, laws, and dominant ideas to keep it.",
      "Conflict comes from unequal ownership (Marx) and from unequal authority in organizations (Dahrendorf).",
      "Conflict and inequality, not shared values, drive social change."
    ],
    use: "These are tenets, not arrows. In a model, conflict theory frames outcomes as products of unequal power and guides the choice of structural causes (income inequality, class or employment position, policy). Power differences can enter as moderators."
  },
  AOP: {
    type: "Critical perspective",
    group: "power", name: "Anti-Oppressive and Structural Social Work", critical: true,
    desc: "Many personal problems come from social structures; practice must change structures as well as help individuals.",
    chips: ["Personal-level oppression", "Cultural-level oppression", "Structural-level oppression", "Privilege and power"],
    seminal: "Moreau, M. J. (1979). A structural approach to social work practice. *Canadian Journal of Social Work Education, 5*(1), 78–94.",
    origins: [],
    revisions: [
      {tag: "Extended", cite: "Mullaly, B. (2007). *The new structural social work* (3rd ed.). Oxford University Press.", note: "Book-length theory of structural social work (first edition 1993)."},
      {tag: "Extended", cite: "Mullaly, B. (2010). *Challenging oppression and confronting privilege: A critical social work approach* (2nd ed.). Oxford University Press.", note: "Anti-oppressive extension: levels of oppression and the worker's privilege."},
      {tag: "Extended", cite: "Dominelli, L. (2002). *Anti-oppressive social work theory and practice*. Palgrave Macmillan. https://doi.org/10.1007/978-1-4039-1400-2", note: "Standard text on anti-oppressive practice."},
      {tag: "Extended", cite: "Thompson, N. (2021). *Anti-discriminatory practice: Equality, diversity and social justice* (7th ed.). Red Globe Press.", note: "The personal, cultural, and structural (PCS) model, widely used in anti-oppressive practice."}
    ],
    props: [
      "Many personal problems come from social structures (oppression by class, race, gender, sexuality, disability, age, and other divisions), not individual deficits.",
      "Oppression works at three linked levels: personal (attitudes and actions), cultural (shared values, norms, language), and structural (institutions, law, the economy) (Thompson's PCS model).",
      "Practice must change structures as well as help individuals.",
      "Workers examine their own privilege and power, including the power of the professional role, and share power with service users."
    ],
    use: "These are tenets, not arrows. In a model, they frame the problem structurally and guide the choice of causes and outcomes at more than one level (discrimination, institutional access, policy). They support participatory designs."
  },
  PUSHPULL: {
    type: "Theory",
    group: "migration", name: "Push–Pull Theory of Migration (Lee)",
    desc: "The decision to migrate depends on factors at the origin and destination, the obstacles between them, and personal factors.",
    chips: ["Factors at origin", "Factors at destination", "Intervening obstacles", "Personal factors", "Migration"],
    seminal: "Lee, E. S. (1966). A theory of migration. *Demography, 3*(1), 47–57. https://doi.org/10.2307/2060063",
    origins: [{cite: "Ravenstein, E. G. (1885). The laws of migration. *Journal of the Statistical Society of London, 48*(2), 167–235. https://doi.org/10.2307/2979181", note: "Laws of migration from British census data: most moves are short and step-wise, and each current produces a counter-current."}],
    revisions: [],
    props: [
      "Four sets of factors drive the decision to migrate: factors at the origin, factors at the destination, intervening obstacles (distance, cost, legal barriers), and personal factors.",
      "Both the origin and the destination have attracting (+) and repelling (−) factors.",
      "Migration is selective: people drawn by positive factors at the destination tend to be positively selected; people pushed by negative factors at the origin, less so.",
      "The volume of migration rises with the diversity of areas and people and falls as obstacles grow.",
      "Each major migration stream produces a counterstream."
    ]
  },
  ACCULT: {
    type: "Model",
    group: "migration", name: "Acculturation Strategies (Berry)",
    desc: "Immigrants adapt by keeping or letting go of their heritage culture and by seeking or avoiding contact with the larger society.",
    chips: ["Heritage culture maintenance", "Contact with larger society", "Acculturation strategy", "Acculturative stress", "Receiving society attitudes", "Adaptation"],
    seminal: "Berry, J. W. (1997). Immigration, acculturation, and adaptation. *Applied Psychology: An International Review, 46*(1), 5–34. https://doi.org/10.1111/j.1464-0597.1997.tb01087.x",
    origins: [
      {cite: "Redfield, R., Linton, R., & Herskovits, M. J. (1936). Memorandum for the study of acculturation. *American Anthropologist, 38*(1), 149–152. https://doi.org/10.1525/aa.1936.38.1.02a00330", note: "Classic definition of acculturation."},
      {cite: "Berry, J. W., Kim, U., Minde, T., & Mok, D. (1987). Comparative studies of acculturative stress. *International Migration Review, 21*(3), 491–511. https://doi.org/10.1177/019791838702100303", note: "Defined acculturative stress."}
    ],
    revisions: [{tag: "Restated", cite: "Berry, J. W. (2005). Acculturation: Living successfully in two cultures. *International Journal of Intercultural Relations, 29*(6), 697–712. https://doi.org/10.1016/j.ijintrel.2005.07.013", note: "Restates acculturation as a two-way process involving both groups."}],
    props: [
      "Two issues define the strategies: keeping one's heritage culture, and seeking contact with the larger society. Yes/yes is integration, no/yes assimilation, yes/no separation, no/no marginalization.",
      "Integration is usually linked to the best adaptation and marginalization to the worst.",
      "Acculturative stress arises from intercultural contact; its level depends on the strategy and on the receiving society's attitudes (moderation).",
      "The larger society's policies limit which strategies are possible; integration requires an open, inclusive society."
    ]
  },
  SEGASSIM: {
    type: "Theory",
    group: "migration", name: "Segmented Assimilation",
    desc: "Children of immigrants assimilate into different segments of society, depending on family resources and how their group is received.",
    chips: ["Parents' human capital", "Family structure", "Mode of incorporation", "Discrimination", "Second-generation outcomes"],
    seminal: "Portes, A., & Zhou, M. (1993). The new second generation: Segmented assimilation and its variants. *The Annals of the American Academy of Political and Social Science, 530*(1), 74–96. https://doi.org/10.1177/0002716293530001006",
    origins: [],
    revisions: [{tag: "Extended", cite: "Portes, A., & Rumbaut, R. G. (2001). *Legacies: The story of the immigrant second generation*. University of California Press.", note: "Tested the model with longitudinal data and named selective acculturation as the protective path."}],
    props: [
      "Second-generation youth follow one of three paths: integration into the middle class, downward assimilation into poverty, or advancement while keeping the immigrant community's values and ties (selective acculturation, named in 2001).",
      "The path depends on parents' human capital, family structure, and the mode of incorporation (government policy, how society receives the group, the co-ethnic community).",
      "Discrimination, an hourglass labor market with few ladders, and inner-city adversarial subcultures raise the risk of downward assimilation."
    ]
  },
  TRANSNAT: {
    type: "Framework",
    group: "migration", name: "Transnationalism",
    desc: "Migrants live across borders, building social fields that link their country of origin and their new country.",
    chips: ["Transnational ties", "Remittances", "Incorporation in host country", "Adaptation"],
    seminal: "Glick Schiller, N., Basch, L., & Blanc-Szanton, C. (1992). Transnationalism: A new analytic framework for understanding migration. *Annals of the New York Academy of Sciences, 645*(1), 1–24. https://doi.org/10.1111/j.1749-6632.1992.tb33484.x",
    origins: [],
    revisions: [
      {tag: "Extended", cite: "Basch, L., Glick Schiller, N., & Szanton Blanc, C. (1994). *Nations unbound: Transnational projects, postcolonial predicaments, and deterritorialized nation-states*. Gordon and Breach.", note: "Extended the framework to the political projects of origin states."},
      {tag: "Extended", cite: "Levitt, P., & Glick Schiller, N. (2004). Conceptualizing simultaneity: A transnational social field perspective on society. *International Migration Review, 38*(3), 1002–1039. https://doi.org/10.1111/j.1747-7379.2004.tb00227.x", note: "Separated ways of being (practices) from ways of belonging (identity); migrants incorporate and keep ties at the same time."}
    ],
    props: [
      "Migrants build and sustain social fields that link the society of origin and the society of settlement.",
      "They act, decide, and form identities within networks that cross borders: family, economic, political, and religious ties carried by remittances, communication, and travel.",
      "Incorporation in the new country and transnational ties can happen at the same time.",
      "Transnational ties can support adaptation (resources, support) or strain it (obligations, divided loyalties)."
    ]
  },
  KUNZ: {
    type: "Model",
    group: "migration", name: "Kinetic Model of Refugee Flight (Kunz)",
    desc: "Refugees are pushed out rather than pulled; how they flee and how they relate to their home society shape resettlement.",
    chips: ["Anticipatory flight", "Acute flight", "Identification with home society", "Host-society factors", "Resettlement"],
    seminal: "Kunz, E. F. (1973). The refugee in flight: Kinetic models and forms of displacement. *International Migration Review, 7*(2), 125–146. https://doi.org/10.1177/019791837300700201",
    origins: [],
    revisions: [{tag: "Extended", cite: "Kunz, E. F. (1981). Exile and resettlement: Refugee theory. *International Migration Review, 15*(1–2), 42–51. https://doi.org/10.1177/0197918381015001-207", note: "Moved from flight to resettlement: identification with the home society and host-society factors such as cultural compatibility and host attitudes."}],
    props: [
      "Refugees differ from voluntary migrants because they are pushed out rather than pulled; they are reluctant to leave and have no positive reason to settle elsewhere.",
      "Anticipatory refugees leave in an orderly way before the crisis; acute refugees flee mass danger with little preparation.",
      "Refugees who are majority-identified, events-alienated, or self-alienated from the home society resettle differently, together with host-society factors (1981)."
    ]
  },
  DAILYSTR: {
    type: "Model",
    group: "migration", name: "Daily Stressors Model (Miller & Rasmussen)",
    desc: "In war and displacement, ongoing daily stressors explain much of the distress, alongside past trauma.",
    chips: ["War exposure", "Daily stressors", "Displacement-related stressors", "Mental health"],
    seminal: "Miller, K. E., & Rasmussen, A. (2010). War exposure, daily stressors, and mental health in conflict and post-conflict settings: Bridging the divide between trauma-focused and psychosocial frameworks. *Social Science & Medicine, 70*(1), 7–16. https://doi.org/10.1016/j.socscimed.2009.09.029",
    origins: [],
    revisions: [{tag: "Revised", cite: "Miller, K. E., & Rasmussen, A. (2017). The mental health of civilians displaced by armed conflict: An ecological model of refugee distress. *Epidemiology and Psychiatric Sciences, 26*(2), 129–138. https://doi.org/10.1017/S2045796016000172", note: "Applied the model to refugees and asylum seekers as an ecological model of displacement-related stressors."}],
    props: [
      "War exposure affects mental health directly and partly through daily stressors such as poverty, unemployment, poor housing, isolation, and family violence (partial mediation).",
      "Daily or displacement-related stressors often account for as much distress as past war exposure, and sometimes more.",
      "The model recommends addressing daily stressors first, then offering trauma-focused care to people whose distress persists."
    ]
  },
  ADAPT: {
    type: "Model",
    group: "migration", name: "ADAPT Model (Silove)",
    desc: "Mass conflict disrupts five core adaptive systems; rebuilding them in the social environment supports recovery.",
    chips: ["Safety and security", "Bonds and networks", "Justice", "Roles and identities", "Existential meaning", "Recovery"],
    seminal: "Silove, D. (2013). The ADAPT model: A conceptual framework for mental health and psychosocial programming in post conflict settings. *Intervention, 11*(3), 237–248. https://doi.org/10.1097/WTF.0000000000000005",
    origins: [{cite: "Silove, D. (1999). The psychosocial effects of torture, mass human rights violations, and refugee trauma: Toward an integrated conceptual framework. *The Journal of Nervous and Mental Disease, 187*(4), 200–207. https://doi.org/10.1097/00005053-199904000-00002", note: "First set out the five adaptive systems."}],
    revisions: [],
    props: [
      "Mass conflict challenges five adaptive systems: safety and security, bonds and networks, justice, roles and identities, and existential meaning.",
      "Disruption of each system links to a typical reaction: safety to PTSD-type fear, bonds to grief, justice to anger, roles to identity disruption, meaning to alienation.",
      "Most people recover when these systems are rebuilt in the social environment, which reduces the need for individual treatment."
    ]
  },
  INTEGRATION: {
    type: "Framework",
    group: "migration", name: "Indicators of Integration (Ager & Strang)",
    desc: "Refugee integration has ten domains, from rights and citizenship to jobs and housing, linked by social connections.",
    chips: ["Rights and citizenship", "Language and cultural knowledge", "Safety and stability", "Social bonds, bridges, and links", "Employment, housing, education, health"],
    seminal: "Ager, A., & Strang, A. (2008). Understanding integration: A conceptual framework. *Journal of Refugee Studies, 21*(2), 166–191. https://doi.org/10.1093/jrs/fen016",
    origins: [],
    revisions: [],
    props: [
      "Integration has ten domains at four levels: markers and means (employment, housing, education, health); social connections (bonds, bridges, links); facilitators (language and cultural knowledge, safety and stability); and a foundation (rights and citizenship).",
      "Rights and citizenship are the foundation; how a government defines refugee rights shapes what integration can mean.",
      "Social connections link the foundation to the outcomes; bonds, bridges, and links each contribute differently.",
      "Integration is two-way and multidimensional; success in one domain does not by itself mean integration."
    ]
  },
  ETL: {
    type: "Theory",
    group: "lonely", name: "Evolutionary Theory of Loneliness",
    desc: "Loneliness is an inherited warning signal, like hunger, that social connections are threatened; when chronic, it becomes self-reinforcing and harms health.",
    chips: ["Loneliness", "Hypervigilance for social threat", "Negative social bias", "Social withdrawal", "Stress physiology", "Health"],
    seminal: "Cacioppo, J. T., & Cacioppo, S. (2018). Loneliness in the modern age: An evolutionary theory of loneliness (ETL). *Advances in Experimental Social Psychology, 58*, 127–197. https://doi.org/10.1016/bs.aesp.2018.03.003",
    origins: [
      {cite: "Cacioppo, J. T., & Patrick, W. (2008). *Loneliness: Human nature and the need for social connection*. W. W. Norton.", note: "Loneliness as a biological signal that prompts reconnection."},
      {cite: "Cacioppo, J. T., & Hawkley, L. C. (2009). Perceived social isolation and cognition. *Trends in Cognitive Sciences, 13*(10), 447–454. https://doi.org/10.1016/j.tics.2009.06.005", note: "Added the cognitive mechanism: sensitivity to social threat and a self-defeating confirmatory bias."}
    ],
    revisions: [{tag: "Extended", cite: "Hawkley, L. C., & Cacioppo, J. T. (2010). Loneliness matters: A theoretical and empirical review of consequences and mechanisms. *Annals of Behavioral Medicine, 40*(2), 218–227. https://doi.org/10.1007/s12160-010-9210-8", note: "Integrated the self-reinforcing loop and its health pathways."}],
    props: [
      "Loneliness is an inherited, unpleasant signal, like hunger, that valued social connections are threatened; it motivates people to repair or replace them.",
      "Loneliness triggers short-term self-preservation: nonconscious hypervigilance for social threat and greater self-centeredness.",
      "Hypervigilance biases attention and memory toward negative social information, which shapes behavior that brings the expected rejection (a self-reinforcing loop).",
      "Chronic loneliness harms health through stress physiology, fragmented sleep, inflammation, and poorer cognitive function."
    ]
  },
  DISCREP: {
    type: "Model",
    group: "lonely", name: "Cognitive Discrepancy Model of Loneliness",
    desc: "Loneliness is the gap between the relationships a person has and the relationships they want.",
    chips: ["Actual relationships", "Desired relationships", "Discrepancy", "Attributions", "Loneliness"],
    seminal: "Perlman, D., & Peplau, L. A. (1981). Toward a social psychology of loneliness. In S. Duck & R. Gilmour (Eds.), *Personal relationships: Vol. 3. Personal relationships in disorder* (pp. 31–56). Academic Press.",
    origins: [],
    revisions: [{tag: "Extended", cite: "Peplau, L. A., & Perlman, D. (Eds.). (1982). *Loneliness: A sourcebook of current theory, research and therapy*. Wiley-Interscience.", note: "Places the model beside competing theories of loneliness."}],
    props: [
      "Loneliness is the unpleasant experience that occurs when a person's social relations are deficient in quantity or quality compared with what they want.",
      "Loneliness is subjective and differs from objective isolation: people can be alone without being lonely, or lonely among others.",
      "Changes in actual relationships (loss, moving) or in desired relationships (new life stage, new expectations) can trigger loneliness.",
      "How people explain the gap (attributions) and how much control they feel change how intense and lasting loneliness is (moderation)."
    ]
  },
  WEISS: {
    type: "Typology",
    group: "lonely", name: "Emotional and Social Loneliness (Weiss)",
    desc: "There are two kinds of loneliness: emotional (no close attachment figure) and social (no wider network). Each is relieved only by its own kind of relationship.",
    chips: ["Close attachment figure", "Social network", "Emotional loneliness", "Social loneliness"],
    seminal: "Weiss, R. S. (1973). *Loneliness: The experience of emotional and social isolation*. MIT Press.",
    origins: [],
    revisions: [],
    props: [
      "Emotional loneliness comes from the absence of a close, intimate attachment figure, such as a spouse or partner.",
      "Social loneliness comes from the absence of an engaging network of friends, peers, or community.",
      "Each type is relieved only by its matching relationship: new friends do not relieve the loss of a spouse, and a partner does not replace a community."
    ],
    use: "Weiss's no-substitution claim conflicts with Baumeister and Leary's (1995) view that relationships can partly replace each other. Good for class discussion."
  },
  BERKMAN: {
    type: "Model",
    group: "lonely", name: "Social Networks and Health (Berkman)",
    desc: "Social conditions shape social networks, which affect health through support, influence, engagement, contact, and access to resources.",
    chips: ["Social-structural conditions", "Social networks", "Social support", "Social influence", "Social engagement", "Health behaviors", "Health"],
    seminal: "Berkman, L. F., Glass, T., Brissette, I., & Seeman, T. E. (2000). From social integration to health: Durkheim in the new millennium. *Social Science & Medicine, 51*(6), 843–857. https://doi.org/10.1016/S0277-9536(00)00065-4",
    origins: [],
    revisions: [{tag: "Extended", cite: "Berkman, L. F., & Krishna, A. (2014). Social network epidemiology. In L. F. Berkman, I. Kawachi, & M. M. Glymour (Eds.), *Social epidemiology* (2nd ed., pp. 234–289). Oxford University Press. https://doi.org/10.1093/med/9780195377903.003.0007", note: "Updates the model with network epidemiology methods and evidence."}],
    props: [
      "Upstream conditions (culture, socioeconomic factors, politics, social change) shape the structure and character of social networks.",
      "Networks act through five mechanisms: social support; social influence; social engagement and attachment; person-to-person contact; and access to resources and material goods.",
      "These mechanisms affect health through behavioral, psychological, and physiological pathways (a cascading, mediated model)."
    ]
  },
  BELONG: {
    type: "Hypothesis",
    group: "lonely", name: "Belongingness Hypothesis",
    desc: "People have a fundamental need for frequent, pleasant contact within stable, caring relationships; unmet, it harms well-being and health.",
    chips: ["Need to belong", "Frequent positive contact", "Stable caring relationships", "Well-being", "Health"],
    seminal: "Baumeister, R. F., & Leary, M. R. (1995). The need to belong: Desire for interpersonal attachments as a fundamental human motivation. *Psychological Bulletin, 117*(3), 497–529. https://doi.org/10.1037/0033-2909.117.3.497",
    origins: [],
    revisions: [],
    props: [
      "The need to belong requires both frequent, pleasant interactions with a few people and a stable framework of mutual concern; either alone is not enough.",
      "People form social bonds readily, even under minimal conditions, and resist ending them.",
      "Unmet belonging needs produce negative emotion and harm well-being and physical and mental health.",
      "Once a few close bonds exist, the drive for more decreases, and a new relationship can partly replace a lost one."
    ]
  },
  OSTRACISM: {
    type: "Model",
    group: "lonely", name: "Temporal Need-Threat Model of Ostracism",
    desc: "Being ignored or excluded hurts immediately and threatens four basic needs; long-term exclusion leads to resignation.",
    chips: ["Ostracism", "Belonging", "Self-esteem", "Control", "Meaningful existence", "Resignation"],
    seminal: "Williams, K. D. (2009). Ostracism: A temporal need-threat model. *Advances in Experimental Social Psychology, 41*, 275–314. https://doi.org/10.1016/S0065-2601(08)00406-1",
    origins: [{cite: "Williams, K. D. (1997). Social ostracism. In R. M. Kowalski (Ed.), *Aversive interpersonal behaviors* (pp. 133–170). Plenum Press. https://doi.org/10.1007/978-1-4757-9354-3_7", note: "First need-threat model."}],
    revisions: [{tag: "Extended", cite: "Williams, K. D. (2007). Ostracism. *Annual Review of Psychology, 58*, 425–452. https://doi.org/10.1146/annurev.psych.58.110405.085641", note: "Reviews evidence that the pain is immediate and coping comes later."}],
    props: [
      "Reflexive stage: ostracism is detected quickly, even from strangers, and causes immediate pain.",
      "It threatens four needs: belonging, self-esteem, control, and meaningful existence.",
      "Reflective stage: people act to restore the most threatened needs, through prosocial behavior (belonging, self-esteem) or controlling or aggressive behavior (control, existence).",
      "Resignation stage: long-term ostracism leads to alienation, depression, helplessness, and unworthiness."
    ]
  },
  SOCIOMETER: {
    type: "Theory",
    group: "lonely", name: "Sociometer Theory",
    desc: "Self-esteem is an internal gauge of how much others value and include us; exclusion lowers it, which motivates efforts to restore inclusion.",
    chips: ["Social exclusion", "Relational value", "State self-esteem", "Negative affect", "Efforts to restore inclusion"],
    seminal: "Leary, M. R., Tambor, E. S., Terdal, S. K., & Downs, D. L. (1995). Self-esteem as an interpersonal monitor: The sociometer hypothesis. *Journal of Personality and Social Psychology, 68*(3), 518–530. https://doi.org/10.1037/0022-3514.68.3.518",
    origins: [],
    revisions: [],
    props: [
      "Self-esteem is an internal gauge (a sociometer) of a person's relational value: how much others value and include them.",
      "Signs of exclusion lower state self-esteem and produce negative feelings, even when consciously discounted.",
      "The drop in self-esteem works as an alarm that motivates behavior to restore inclusion (mediation).",
      "Trait self-esteem reflects a long-term history of perceived inclusion or rejection."
    ]
  },
  SILVER: {
    type: "Framework",
    group: "lonely", name: "Social Exclusion (Silver's Three Paradigms)",
    desc: "Social exclusion is the weakening of the bond between people and society; three traditions explain it differently.",
    chips: ["Breakdown of social bonds", "Discrimination and barriers", "Monopoly of resources", "Social exclusion"],
    seminal: "Silver, H. (1994). Social exclusion and social solidarity: Three paradigms. *International Labour Review, 133*(5–6), 531–578.",
    origins: [],
    revisions: [{tag: "Extended", cite: "Levitas, R., Pantazis, C., Fahmy, E., Gordon, D., Lloyd, E., & Patsios, D. (2007). *The multi-dimensional analysis of social exclusion*. University of Bristol. https://repository.uel.ac.uk/item/8666q", note: "An operational, measurable definition: exclusion as a multidimensional process across economic, social, cultural, and political arenas."}],
    props: [
      "Social exclusion is the rupture or weakening of the social bond between individuals and society.",
      "Solidarity paradigm: exclusion is the breakdown of shared moral and cultural bonds.",
      "Specialization paradigm: exclusion comes from discrimination, market failures, and unenforced rights that create barriers between groups.",
      "Monopoly paradigm: powerful groups monopolize resources and close off access to outsiders.",
      "Exclusion is a multidimensional process involving lack of resources, rights, and services and inability to take part in normal activities (Levitas et al., 2007)."
    ]
  },
  SST: {
    type: "Theory",
    group: "aging", name: "Socioemotional Selectivity Theory",
    desc: "How much time people believe they have left shapes their goals; when time feels limited, they put emotional goals and close relationships first.",
    chips: ["Perceived time left", "Knowledge goals", "Emotional goals", "Close relationships", "Peripheral ties", "Well-being"],
    seminal: "Carstensen, L. L., Isaacowitz, D. M., & Charles, S. T. (1999). Taking time seriously: A theory of socioemotional selectivity. *American Psychologist, 54*(3), 165–181. https://doi.org/10.1037/0003-066X.54.3.165",
    origins: [{cite: "Carstensen, L. L. (1992). Social and emotional patterns in adulthood: Support for socioemotional selectivity theory. *Psychology and Aging, 7*(3), 331–338. https://doi.org/10.1037/0882-7974.7.3.331", note: "Early empirical support."}],
    revisions: [{tag: "Extended", cite: "Mather, M., & Carstensen, L. L. (2005). Aging and motivated cognition: The positivity effect in attention and memory. *Trends in Cognitive Sciences, 9*(10), 496–502. https://doi.org/10.1016/j.tics.2005.08.005", note: "Extends the theory to attention and memory: the positivity effect."}],
    props: [
      "How much time people believe they have left shapes which social goals they put first.",
      "When the future feels open-ended, people put knowledge goals first: information, new people, preparing for the future.",
      "When the future feels limited, people put emotional goals first and invest in their closest relationships.",
      "The shift follows perceived time, not age: young people facing a time limit show the same pattern (moderation by time perspective).",
      "Contact with acquaintances drops from early adulthood while closeness to family and close friends grows."
    ]
  },
  SOC: {
    type: "Model",
    group: "aging", name: "Selection, Optimization, and Compensation (SOC)",
    desc: "People manage gains and losses across life by selecting goals, optimizing their means, and compensating when means are lost.",
    chips: ["Selection", "Optimization", "Compensation", "Age-related losses", "Well-being"],
    seminal: "Baltes, P. B., & Baltes, M. M. (1990). Psychological perspectives on successful aging: The model of selective optimization with compensation. In P. B. Baltes & M. M. Baltes (Eds.), *Successful aging: Perspectives from the behavioral sciences* (pp. 1–34). Cambridge University Press. https://doi.org/10.1017/CBO9780511665684.003",
    origins: [],
    revisions: [
      {tag: "Extended", cite: "Baltes, P. B. (1997). On the incomplete architecture of human ontogeny: Selection, optimization, and compensation as foundation of developmental theory. *American Psychologist, 52*(4), 366–380. https://doi.org/10.1037/0003-066X.52.4.366", note: "Recasts SOC as a theory of development across the whole life span."},
      {tag: "Extended", cite: "Freund, A. M., & Baltes, P. B. (1998). Selection, optimization, and compensation as strategies of life management: Correlations with subjective indicators of successful aging. *Psychology and Aging, 13*(4), 531–543. https://doi.org/10.1037/0882-7974.13.4.531", note: "Links reported SOC use to well-being in old age."}
    ],
    props: [
      "Development at every age involves gains and losses; in old age the balance shifts toward losses.",
      "Selection: choosing and narrowing goals, both by choice and after a loss.",
      "Optimization: putting time, effort, and practice into the means that reach the chosen goals.",
      "Compensation: when a means is lost, using new means (aids, help from others, new strategies) to keep the same goal.",
      "Older adults who report using SOC strategies report higher well-being (correlational evidence)."
    ]
  },
  SUCCAGING: {
    type: "Model",
    group: "aging", name: "Successful Aging (Rowe & Kahn)",
    desc: "Successful aging means avoiding disease and disability, keeping high function, and staying engaged with life. Widely used and widely criticized.",
    chips: ["Avoiding disease and disability", "Cognitive and physical function", "Engagement with life", "Lifestyle factors"],
    seminal: "Rowe, J. W., & Kahn, R. L. (1987). Human aging: Usual and successful. *Science, 237*(4811), 143–149. https://doi.org/10.1126/science.3299702",
    origins: [],
    revisions: [
      {tag: "Revised", cite: "Rowe, J. W., & Kahn, R. L. (1997). Successful aging. *The Gerontologist, 37*(4), 433–440. https://doi.org/10.1093/geront/37.4.433", note: "Turned the usual-versus-successful split into a three-part definition."},
      {tag: "Revised", cite: "Rowe, J. W., & Kahn, R. L. (2015). Successful aging 2.0: Conceptual expansions for the 21st century. *The Journals of Gerontology, Series B: Psychological Sciences and Social Sciences, 70*(4), 593–596. https://doi.org/10.1093/geronb/gbv025", note: "The authors' response to critics: adds a life course view and more weight on societal and structural factors."},
      {tag: "Challenged", cite: "Martinson, M., & Berridge, C. (2015). Successful aging and its discontents: A systematic review of the social gerontology literature. *The Gerontologist, 55*(1), 58–69. https://doi.org/10.1093/geront/gnu037", note: "Reviews 67 critiques; concludes that any normative model of aging well excludes some people."}
    ],
    props: [
      "Many losses once blamed on age come from modifiable factors such as diet, exercise, and psychosocial conditions (usual versus successful aging, 1987).",
      "Successful aging has three parts: avoiding disease and disability, keeping high cognitive and physical function, and active engagement with life (relationships and productive activity) (1997).",
      "Critics say the model ignores older adults' own views and structural inequality, and labels people with chronic illness or disability as unsuccessful."
    ]
  },
  DISENGAGE: {
    type: "Theory",
    group: "aging", name: "Disengagement Theory",
    desc: "Aging involves mutual withdrawal between older people and society. Largely rejected, but important as the theory others were built against.",
    chips: ["Role withdrawal", "Societal withdrawal", "Life satisfaction"],
    seminal: "Cumming, E., & Henry, W. E. (1961). *Growing old: The process of disengagement*. Basic Books.",
    origins: [],
    revisions: [{tag: "Challenged", cite: "Hochschild, A. R. (1975). Disengagement theory: A critique and proposal. *American Sociological Review, 40*(5), 553–569. https://doi.org/10.2307/2094195", note: "Argues the theory cannot be falsified and ignores how older adults understand withdrawal."}],
    props: [
      "Aging involves gradual, mutual withdrawal between the older person and society.",
      "The withdrawal is described as inevitable and universal.",
      "It is described as functional for society, allowing an orderly handover of roles.",
      "It is described as satisfying for the older person."
    ],
    use: "Later research did not support these claims. Teach it as history and as the foil for activity and continuity theories."
  },
  ACTIVITY: {
    type: "Theory",
    group: "aging", name: "Activity Theory of Aging",
    desc: "Older adults who stay active and replace lost roles keep higher life satisfaction. Tests gave only partial support.",
    chips: ["Activity level", "Role loss", "Role replacement", "Self-concept", "Life satisfaction"],
    seminal: "Havighurst, R. J. (1961). Successful aging. *The Gerontologist, 1*(1), 8–13. https://doi.org/10.1093/geront/1.1.8",
    origins: [],
    revisions: [{tag: "Restated", cite: "Lemon, B. W., Bengtson, V. L., & Peterson, J. A. (1972). An exploration of the activity theory of aging: Activity types and life satisfaction among in-movers to a retirement community. *Journal of Gerontology, 27*(4), 511–523. https://doi.org/10.1093/geronj/27.4.511", note: "First formal, testable statement; found only a weak link, and only for informal activity with friends."}],
    props: [
      "Older adults who keep up activity and social roles have higher life satisfaction.",
      "When roles are lost (retirement, widowhood), replacing them with new activities helps keep a positive self-concept and well-being.",
      "The formal test (Lemon et al., 1972) found only a weak link, and only for informal activity with friends."
    ]
  },
  CONTINUITY: {
    type: "Theory",
    group: "aging", name: "Continuity Theory",
    desc: "People adapt to aging by keeping continuity in who they are and how they live, linking new changes to their past.",
    chips: ["Internal continuity (identity, beliefs)", "External continuity (relationships, activities)", "Adaptation", "Well-being"],
    seminal: "Atchley, R. C. (1989). A continuity theory of normal aging. *The Gerontologist, 29*(2), 183–190. https://doi.org/10.1093/geront/29.2.183",
    origins: [],
    revisions: [{tag: "Extended", cite: "Atchley, R. C. (1999). *Continuity and adaptation in aging: Creating positive experiences*. Johns Hopkins University Press.", note: "Tests the theory with longitudinal data and fills in internal and external structures."}],
    props: [
      "In making adaptive choices, middle-aged and older adults try to keep existing internal structures (identity, beliefs, skills) and external structures (relationships, activities, settings).",
      "Continuity means new change is linked to the past, not that change is absent.",
      "Continuity is a main adaptive strategy, supported by personal preference and social approval.",
      "Too little continuity feels unpredictable; too much feels like a rut. Optimal continuity lies between."
    ]
  },
  CONVOY: {
    type: "Model",
    group: "aging", name: "Convoy Model of Social Relations",
    desc: "People move through life surrounded by a convoy of close relationships that gives and receives support and shapes health.",
    chips: ["Personal characteristics", "Situational characteristics", "Convoy structure", "Support functions", "Relationship quality", "Health and well-being"],
    seminal: "Kahn, R. L., & Antonucci, T. C. (1980). Convoys over the life course: Attachment, roles, and social support. In P. B. Baltes & O. G. Brim, Jr. (Eds.), *Life-span development and behavior* (Vol. 3, pp. 253–286). Academic Press.",
    origins: [],
    revisions: [{tag: "Restated", cite: "Antonucci, T. C., Ajrouch, K. J., & Birditt, K. S. (2014). The convoy model: Explaining social relations from a multidisciplinary perspective. *The Gerontologist, 54*(1), 82–92. https://doi.org/10.1093/geront/gnt118", note: "Review and update: relationship quality predicts health better than network structure."}],
    props: [
      "People move through life surrounded by a convoy of people who give and receive support, pictured as three circles of closeness.",
      "Personal characteristics (age, gender, race) and situational characteristics (roles, life events, demands) shape the convoy's structure, support, and quality.",
      "Structure, support, and quality affect health and well-being; quality, including negative quality, matters most.",
      "Convoys change over the life course but the closest members tend to stay."
    ]
  },
  CAREGIVER: {
    type: "Model",
    group: "aging", name: "Caregiver Stress Process Model",
    desc: "Caregiving stress spreads from the care recipient's needs to other parts of the caregiver's life; coping and support can change the outcome.",
    chips: ["Background and context", "Primary stressors", "Secondary role strains", "Intrapsychic strains", "Coping", "Social support", "Caregiver depression"],
    seminal: "Pearlin, L. I., Mullan, J. T., Semple, S. J., & Skaff, M. M. (1990). Caregiving and the stress process: An overview of concepts and their measures. *The Gerontologist, 30*(5), 583–594. https://doi.org/10.1093/geront/30.5.583",
    origins: [],
    revisions: [],
    props: [
      "Caregiver stress is a process with four parts: background and context, stressors, mediators, and outcomes.",
      "Primary stressors come directly from caregiving: the care recipient's cognitive status, problem behaviors, and dependency, and the caregiver's overload.",
      "Secondary stressors spread from the primary ones (stress proliferation): family and work conflict, financial strain, loss of self, role captivity.",
      "Coping and social support act as mediators at several points.",
      "Outcomes include depression, anxiety, physical health, and giving up the caregiver role."
    ]
  },
  SOCCAP: {
    type: "Theory",
    group: "capital", name: "Social Capital",
    desc: "Social capital is the resources people can reach through their relationships; it helps some groups and can exclude others.",
    chips: ["Social networks", "Trust and reciprocity", "Bonding social capital", "Bridging social capital", "Linking social capital", "Outcomes"],
    seminal: "Coleman, J. S. (1988). Social capital in the creation of human capital. *American Journal of Sociology, 94*(Suppl.), S95–S120. https://doi.org/10.1086/228943",
    origins: [{cite: "Bourdieu, P. (1986). The forms of capital. In J. G. Richardson (Ed.), *Handbook of theory and research for the sociology of education* (pp. 241–258). Greenwood.", note: "Co-founding statement: social capital as a resource of individuals and classes that helps reproduce class position."}],
    revisions: [
      {tag: "Extended", cite: "Putnam, R. D. (2000). *Bowling alone: The collapse and revival of American community*. Simon & Schuster.", note: "Moved social capital to the community level and popularized bonding versus bridging."},
      {tag: "Extended", cite: "Szreter, S., & Woolcock, M. (2004). Health by association? Social capital, social theory, and the political economy of public health. *International Journal of Epidemiology, 33*(4), 650–667. https://doi.org/10.1093/ije/dyh013", note: "Added linking social capital: ties across power differences."},
      {tag: "Challenged", cite: "Portes, A. (1998). Social capital: Its origins and applications in modern sociology. *Annual Review of Sociology, 24*, 1–24. https://doi.org/10.1146/annurev.soc.24.1.1", note: "Warns against circular definitions and names its costs: excluding outsiders and constraining members."}
    ],
    props: [
      "Social capital is the resources people can reach through their relationships and group memberships.",
      "It works through obligations and trust, information channels, and norms with sanctions; closed networks strengthen these (Coleman).",
      "Bonding (within groups) helps people get by; bridging (across groups) helps them get ahead; linking (to people with formal power) gives access to outside resources.",
      "Social capital is associated with outcomes such as school completion, health, and civic participation.",
      "It concentrates among advantaged groups and can reproduce inequality (Bourdieu) and exclude outsiders (Portes)."
    ],
    use: "Bourdieu (1986) and Coleman (1988) are co-founding statements from different traditions. Say which version you use."
  },
  LIN: {
    type: "Theory",
    group: "capital", name: "Social Resources Theory (Lin)",
    desc: "Social capital is the resources embedded in a person's network; better positions and weak ties give access to better resources.",
    chips: ["Social position", "Network resources", "Weak ties", "Strong ties", "Instrumental outcomes (jobs)", "Expressive outcomes (support)"],
    seminal: "Lin, N. (2001). *Social capital: A theory of social structure and action*. Cambridge University Press. https://doi.org/10.1017/CBO9780511815447",
    origins: [],
    revisions: [],
    props: [
      "Social capital is resources embedded in a social network that people access and use for their goals.",
      "Better social positions give access to better embedded resources (strength of position).",
      "Weak ties reach contacts with better resources for instrumental goals such as jobs.",
      "Strong ties serve expressive goals: keeping resources and emotional support."
    ]
  },
  SOCDISORG: {
    type: "Theory",
    group: "capital", name: "Social Disorganization Theory",
    desc: "Poor, unstable neighborhoods have weaker informal social control, which leads to more delinquency and crime.",
    chips: ["Neighborhood poverty", "Residential instability", "Family disruption", "Friendship networks", "Informal social control", "Crime"],
    seminal: "Shaw, C. R., & McKay, H. D. (1942). *Juvenile delinquency and urban areas*. University of Chicago Press.",
    origins: [],
    revisions: [
      {tag: "Revised", cite: "Kornhauser, R. R. (1978). *Social sources of delinquency: An appraisal of analytic models*. University of Chicago Press.", note: "Recast the theory as a control theory: a community's inability to realize shared values and keep effective control."},
      {tag: "Revised", cite: "Sampson, R. J., & Groves, W. B. (1989). Community structure and crime: Testing social-disorganization theory. *American Journal of Sociology, 94*(4), 774–802. https://doi.org/10.1086/229068", note: "First direct test of the mediating processes; added family disruption."}
    ],
    props: [
      "Delinquency rates are highest in low-income, unstable, mixed areas, and stay high as groups move through, which places the cause in the place, not the group (Shaw & McKay).",
      "These conditions weaken a community's ability to realize shared values and keep informal social control (Kornhauser).",
      "Low economic status, ethnic heterogeneity, residential mobility, and family disruption reduce friendship networks, supervision of teen groups, and participation in local organizations.",
      "Much of the effect of these structural factors on crime works through these processes (mediation; Sampson & Groves)."
    ]
  },
  COLLEFF: {
    type: "Theory",
    group: "capital", name: "Collective Efficacy",
    desc: "Neighbors' trust in each other and willingness to act for the common good reduce violence.",
    chips: ["Concentrated disadvantage", "Residential instability", "Social cohesion", "Willingness to intervene", "Collective efficacy", "Violence"],
    seminal: "Sampson, R. J., Raudenbush, S. W., & Earls, F. (1997). Neighborhoods and violent crime: A multilevel study of collective efficacy. *Science, 277*(5328), 918–924. https://doi.org/10.1126/science.277.5328.918",
    origins: [],
    revisions: [
      {tag: "Extended", cite: "Sampson, R. J., Morenoff, J. D., & Gannon-Rowley, T. (2002). Assessing “neighborhood effects”: Social processes and new directions in research. *Annual Review of Sociology, 28*, 443–478. https://doi.org/10.1146/annurev.soc.28.110601.141114", note: "Shifted neighborhood research toward measured social processes."},
      {tag: "Extended", cite: "Sampson, R. J. (2012). *Great American city: Chicago and the enduring neighborhood effect*. University of Chicago Press.", note: "Book-length synthesis: neighborhood effects are durable and spatially linked."}
    ],
    props: [
      "Collective efficacy is social cohesion among neighbors combined with their willingness to intervene for the common good.",
      "Concentrated disadvantage, immigrant concentration, and residential instability predict lower collective efficacy.",
      "Higher collective efficacy is associated with lower violence.",
      "Collective efficacy largely mediates the links between neighborhood disadvantage and instability and violence."
    ]
  },
  WEAKTIES: {
    type: "Theory",
    group: "capital", name: "Strength of Weak Ties",
    desc: "Acquaintances bridge separate groups and bring new information and opportunities, such as jobs, that close friends cannot.",
    chips: ["Strong ties", "Weak ties", "Bridging ties", "New information", "Job opportunities"],
    seminal: "Granovetter, M. S. (1973). The strength of weak ties. *American Journal of Sociology, 78*(6), 1360–1380. https://doi.org/10.1086/225469",
    origins: [],
    revisions: [{tag: "Revised", cite: "Granovetter, M. (1983). The strength of weak ties: A network theory revisited. *Sociological Theory, 1*, 201–233. https://doi.org/10.2307/202051", note: "Narrowed the claim to weak ties that act as bridges and noted strong ties matter more under insecurity."}],
    props: [
      "Strong ties tend to share friends, so close circles share the same information.",
      "Weak ties bridge separate groups and bring new information and opportunities, such as job leads.",
      "People with few weak ties are cut off from information beyond their close circle.",
      "Weak ties help most when they reach higher-status contacts; strong ties matter more for support under insecurity (1983)."
    ]
  },
  ACE: {
    type: "Framework", group: "child", name: "Adverse Childhood Experiences (ACE) Framework",
    desc: "Childhood abuse, neglect, and household dysfunction are common and show a dose–response link with adult health and early death.",
    chips: ["Adverse childhood experiences", "Disrupted neurodevelopment", "Social, emotional, and cognitive impairment", "Health-risk behaviors", "Disease and early death"],
    seminal: "Felitti, V. J., Anda, R. F., Nordenberg, D., Williamson, D. F., Spitz, A. M., Edwards, V., Koss, M. P., & Marks, J. S. (1998). Relationship of childhood abuse and household dysfunction to many of the leading causes of death in adults: The Adverse Childhood Experiences (ACE) Study. *American Journal of Preventive Medicine, 14*(4), 245–258. https://doi.org/10.1016/S0749-3797(98)00017-8",
    origins: [],
    revisions: [
      {tag: "Extended", cite: "Anda, R. F., Felitti, V. J., Bremner, J. D., Walker, J. D., Whitfield, C., Perry, B. D., Dube, S. R., & Giles, W. H. (2006). The enduring effects of abuse and related adverse experiences in childhood: A convergence of evidence from neurobiology and epidemiology. *European Archives of Psychiatry and Clinical Neuroscience, 256*(3), 174–186. https://doi.org/10.1007/s00406-005-0624-4", note: "Linked the dose–response findings to neurobiology; the source of the neurodevelopment pathway."},
      {tag: "Extended", cite: "Cronholm, P. F., Forke, C. M., Wade, R., Bair-Merritt, M. H., Davis, M., Harkins-Schwarz, M., Pachter, L. M., & Fein, J. A. (2015). Adverse childhood experiences: Expanding the concept of adversity. *American Journal of Preventive Medicine, 49*(3), 354–361. https://doi.org/10.1016/j.amepre.2015.02.001", note: "Added community-level adversities: witnessing violence, discrimination, unsafe neighborhoods, bullying, foster care."},
      {tag: "Challenged", cite: "Anda, R. F., Porter, L. E., & Brown, D. W. (2020). Inside the adverse childhood experience score: Strengths, limitations, and misapplications. *American Journal of Preventive Medicine, 59*(2), 293–295. https://doi.org/10.1016/j.amepre.2020.01.009", note: "The original investigators: the ACE score is for population surveillance, not individual screening or diagnosis."}
    ],
    props: [
      "Childhood abuse, neglect, and household dysfunction are common and tend to occur together.",
      "The number of ACE categories shows a graded, dose–response link with health-risk behaviors, disease, and early death.",
      "ACEs lead to disrupted neurodevelopment, then social, emotional, and cognitive impairment, then health-risk behaviors, then disease and early death (the ACE pyramid; the neurodevelopment level was added after 2006).",
      "The ACE score counts types of exposure, not severity, timing, or duration, so it estimates population risk and is not an individual diagnostic tool."
    ]
  },
  COERCION: {
    type: "Theory", group: "child", name: "Coercive Family Process (Patterson)",
    desc: "Parents and children train each other into escalating coercion, which leads to conduct problems and later delinquency.",
    chips: ["Ineffective discipline", "Poor monitoring", "Coercive exchanges", "Conduct problems", "Peer rejection", "Deviant peers", "Delinquency"],
    seminal: "Patterson, G. R. (1982). *Coercive family process*. Castalia.",
    origins: [],
    revisions: [
      {tag: "Extended", cite: "Patterson, G. R., DeBaryshe, B. D., & Ramsey, E. (1989). A developmental perspective on antisocial behavior. *American Psychologist, 44*(2), 329–335. https://doi.org/10.1037/0003-066X.44.2.329", note: "Placed coercion in a developmental progression from early childhood to delinquency."},
      {tag: "Extended", cite: "Patterson, G. R., Reid, J. B., & Dishion, T. J. (1992). *Antisocial boys*. Castalia.", note: "Tested the model in the Oregon Youth Study; added deviant peer training in adolescence."}
    ],
    props: [
      "When a parent gives in to a child's aversive behavior, the child is negatively reinforced, and the child's stopping reinforces the parent's giving in.",
      "When the parent does not give in, both escalate; occasional parental harshness is reinforced when the child complies.",
      "Ineffective discipline and poor monitoring train conduct problems in the child.",
      "Conduct problems lead to school failure and rejection by peers, then deviant peers, then delinquency (a developmental progression, later called a cascade)."
    ]
  },
  CYCLEVIOL: {
    type: "Hypothesis", group: "child", name: "Cycle of Violence (Intergenerational Transmission)",
    desc: "Childhood abuse, neglect, or witnessing violence raises the risk of later violence and victimization, but most maltreated children do not become violent.",
    chips: ["Childhood maltreatment", "Witnessing family violence", "Social learning", "Emotion regulation", "Later violence"],
    seminal: "Widom, C. S. (1989a). The cycle of violence. *Science, 244*(4901), 160–166. https://doi.org/10.1126/science.2704995",
    origins: [{cite: "Straus, M. A., Gelles, R. J., & Steinmetz, S. K. (1980). *Behind closed doors: Violence in the American family*. Anchor Press/Doubleday.", note: "National survey evidence and the social learning argument (violence begets violence)."}],
    revisions: [
      {tag: "Extended", cite: "Widom, C. S. (1989b). Does violence beget violence? A critical examination of the literature. *Psychological Bulletin, 106*(1), 3–28. https://doi.org/10.1037/0033-2909.106.1.3", note: "Showed that earlier support rested on weak retrospective and clinical designs."},
      {tag: "Challenged", cite: "Kaufman, J., & Zigler, E. (1987). Do abused children become abusive parents? *American Journal of Orthopsychiatry, 57*(2), 186–192. https://doi.org/10.1111/j.1939-0025.1987.tb03528.x", note: "Estimated that about 30% of abused children later abuse their own children."}
    ],
    props: [
      "Being abused or neglected, or witnessing violence between parents, in childhood raises the risk of later violent behavior and later victimization.",
      "The link is probabilistic: most maltreated children do not become violent or abusive (about one-third, Kaufman & Zigler).",
      "Proposed mechanisms include social learning, effects on emotion regulation and attachment, and shared family and neighborhood risk (mediation)."
    ]
  },
  BELSKY: {
    type: "Model", group: "child", name: "Ecological Model of Child Maltreatment (Belsky)",
    desc: "Maltreatment comes from factors at several nested levels, from the parent's own history to culture; no single factor is necessary or sufficient.",
    chips: ["Parent's developmental history", "Family stress", "Social support and neighborhood", "Cultural values", "Child maltreatment"],
    seminal: "Belsky, J. (1980). Child maltreatment: An ecological integration. *American Psychologist, 35*(4), 320–335. https://doi.org/10.1037/0003-066X.35.4.320",
    origins: [],
    revisions: [
      {tag: "Revised", cite: "Belsky, J. (1993). Etiology of child maltreatment: A developmental-ecological analysis. *Psychological Bulletin, 114*(3), 413–434. https://doi.org/10.1037/0033-2909.114.3.413", note: "Reorganized the levels into three contexts and stated that no single factor is necessary or sufficient."},
      {tag: "Extended", cite: "Cicchetti, D., & Lynch, M. (1993). Toward an ecological/transactional model of community violence and child maltreatment: Consequences for children's development. *Psychiatry, 56*(1), 96–118. https://doi.org/10.1080/00332747.1993.11024624", note: "Turned to effects on children; added community violence and potentiating versus compensatory factors."}
    ],
    props: [
      "Maltreatment arises from factors at four nested levels: the parent's own history, the family, the community (work, neighborhood, social support), and culture.",
      "No single factor is necessary or sufficient; maltreatment occurs when stressors outweigh supports (Belsky, 1993).",
      "Risk (potentiating) and protective (compensatory) factors at every level interact over time with the child's development (Cicchetti & Lynch)."
    ]
  },
  DEVPSYCH: {
    type: "Framework", group: "child", name: "Developmental Psychopathology",
    desc: "Normal and atypical development are studied together; one risk can lead to many outcomes, and effects spread across domains over time.",
    chips: ["Early adversity", "Multifinality", "Equifinality", "Developmental cascades", "Later outcomes"],
    seminal: "Cicchetti, D. (1984). The emergence of developmental psychopathology. *Child Development, 55*(1), 1–7. https://doi.org/10.2307/1129830",
    origins: [{cite: "Sroufe, L. A., & Rutter, M. (1984). The domain of developmental psychopathology. *Child Development, 55*(1), 17–29. https://doi.org/10.2307/1129832", note: "Co-founding statement of the field's scope."}],
    revisions: [
      {tag: "Extended", cite: "Cicchetti, D., & Rogosch, F. A. (1996). Equifinality and multifinality in developmental psychopathology. *Development and Psychopathology, 8*(4), 597–600. https://doi.org/10.1017/S0954579400007318", note: "Formal statement of multifinality and equifinality."},
      {tag: "Extended", cite: "Masten, A. S., & Cicchetti, D. (2010). Developmental cascades. *Development and Psychopathology, 22*(3), 491–495. https://doi.org/10.1017/S0954579410000222", note: "Defined developmental cascades."}
    ],
    props: [
      "Normal and atypical development inform each other, so they are studied together.",
      "Multifinality: one risk, such as maltreatment, leads to many different outcomes. Equifinality: many pathways lead to the same outcome.",
      "Through developmental cascades, effects in one domain spread to other domains and later periods; cascades can be harmful or protective."
    ]
  },
  JOHNSONIPV: {
    type: "Typology", group: "child", name: "Typology of Intimate Partner Violence (Johnson)",
    desc: "Intimate partner violence is not one thing: violence embedded in coercive control differs from violence arising from particular conflicts.",
    chips: ["Coercive control", "Intimate terrorism", "Situational couple violence", "Escalation"],
    seminal: "Johnson, M. P. (1995). Patriarchal terrorism and common couple violence: Two forms of violence against women. *Journal of Marriage and the Family, 57*(2), 283–294. https://doi.org/10.2307/353683",
    origins: [],
    revisions: [],
    props: [
      "Intimate partner violence includes distinct types that differ in how central control is.",
      "Intimate terrorism (originally patriarchal terrorism) is violence within a general pattern of coercive control; it escalates, is mostly perpetrated by men, and appears in shelter and agency samples.",
      "Situational couple violence (originally common couple violence) arises from particular conflicts; it is less frequent, less likely to escalate, and roughly gender-symmetric in general population surveys.",
      "The type a study samples explains why shelter-based and population-survey research reached different conclusions about gender."
    ]
  },
  TRAUMAGENIC: {
    type: "Model", group: "child", name: "Traumagenic Dynamics of Child Sexual Abuse",
    desc: "Child sexual abuse harms through four dynamics: traumatic sexualization, betrayal, powerlessness, and stigmatization.",
    chips: ["Traumatic sexualization", "Betrayal", "Powerlessness", "Stigmatization", "Later difficulties"],
    seminal: "Finkelhor, D., & Browne, A. (1985). The traumatic impact of child sexual abuse: A conceptualization. *American Journal of Orthopsychiatry, 55*(4), 530–541. https://doi.org/10.1111/j.1939-0025.1985.tb02703.x",
    origins: [],
    revisions: [],
    props: [
      "Child sexual abuse affects children through four traumagenic dynamics: traumatic sexualization, betrayal, powerlessness, and stigmatization.",
      "Each dynamic alters the child's view of self, others, and the world.",
      "Each dynamic is linked to particular later difficulties (mediation)."
    ]
  },
  SOCMODEL: {
    type: "Model", group: "disab", name: "Social Model of Disability",
    desc: "Disability is produced by social barriers, not by impairment itself; removing barriers reduces disability.",
    chips: ["Impairment", "Environmental barriers", "Attitudes", "Institutional exclusion", "Disability (exclusion)", "Participation"],
    seminal: "Oliver, M. (1990). *The politics of disablement*. Macmillan. https://doi.org/10.1007/978-1-349-20895-1",
    origins: [{cite: "Union of the Physically Impaired Against Segregation. (1976). *Fundamental principles of disability*. Union of the Physically Impaired Against Segregation.", note: "First separated impairment (the body) from disability (social exclusion)."}],
    revisions: [
      {tag: "Extended", cite: "Oliver, M. (1983). *Social work with disabled people*. Macmillan. https://doi.org/10.1007/978-1-349-86058-6", note: "Applied the model to social work practice."},
      {tag: "Restated", cite: "Oliver, M. (2013). The social model of disability: Thirty years on. *Disability & Society, 28*(7), 1024–1026. https://doi.org/10.1080/09687599.2013.818773", note: "Defends the model as a practical tool for political action and answers critics."},
      {tag: "Challenged", cite: "Shakespeare, T. (2006). *Disability rights and wrongs*. Routledge. https://doi.org/10.4324/9780203640098", note: "Argues impairment itself (pain, fatigue) also disadvantages people; proposes an interactional approach."},
      {tag: "Extended", cite: "World Health Organization. (2001). *International classification of functioning, disability and health: ICF*. World Health Organization.", note: "Biopsychosocial classification: functioning results from health condition, activities, participation, and environmental and personal factors."}
    ],
    props: [
      "Impairment is a difference in body or mind; disability is the exclusion and disadvantage society imposes on people with impairments.",
      "Inaccessible environments, discriminatory attitudes, and exclusionary institutions produce disability.",
      "Removing social barriers, rather than treating or normalizing the person, reduces disability; disabled people should control that change.",
      "Critics argue impairment effects also disadvantage people (Shakespeare), and the ICF treats disability as an interaction of body and environment."
    ]
  },
  STIGMA: {
    type: "Theory", group: "disab", name: "Stigma (Goffman; Link & Phelan)",
    desc: "Stigma is a deeply discrediting attribute; it exists when labeling, stereotyping, separation, status loss, and discrimination occur together under unequal power.",
    chips: ["Labeling", "Stereotyping", "Separation", "Status loss", "Discrimination", "Power"],
    seminal: "Goffman, E. (1963). *Stigma: Notes on the management of spoiled identity*. Prentice-Hall.",
    origins: [],
    revisions: [{tag: "Revised", cite: "Link, B. G., & Phelan, J. C. (2001). Conceptualizing stigma. *Annual Review of Sociology, 27*, 363–385. https://doi.org/10.1146/annurev.soc.27.1.363", note: "Defined stigma as co-occurring components and made the exercise of power a necessary condition."}],
    props: [
      "Stigma is an attribute that is deeply discrediting; it reduces a person from a whole person to a tainted, discounted one (Goffman).",
      "People with a visible difference (the discredited) manage tension in interaction; people with a hidden difference (the discreditable) manage information, for example by passing.",
      "Stigma exists when labeling, stereotyping, separation, status loss, and discrimination occur together in a situation of unequal power (Link & Phelan)."
    ]
  },
  MODLABEL: {
    type: "Theory", group: "disab", name: "Modified Labeling Theory",
    desc: "Once labeled with a mental illness, people expect rejection; their ways of coping shrink networks, jobs, and self-esteem.",
    chips: ["Psychiatric label", "Expected rejection", "Secrecy and withdrawal", "Social networks", "Self-esteem", "Relapse risk"],
    seminal: "Link, B. G., Cullen, F. T., Struening, E., Shrout, P. E., & Dohrenwend, B. P. (1989). A modified labeling theory approach to mental disorders: An empirical assessment. *American Sociological Review, 54*(3), 400–423. https://doi.org/10.2307/2095613",
    origins: [{cite: "Scheff, T. J. (1966). *Being mentally ill: A sociological theory*. Aldine.", note: "Original labeling theory, which held that labeling causes stable mental illness."}],
    revisions: [],
    props: [
      "Through socialization, people learn that most people devalue and discriminate against those with a psychiatric label.",
      "After a label (for example, through treatment), those beliefs become personally relevant, and the person expects rejection.",
      "The person copes through secrecy, withdrawal, or educating others; these responses and expected rejection shrink networks, lower employment, and erode self-esteem (mediation).",
      "These consequences raise vulnerability to new or longer episodes."
    ]
  },
  RECOVERY: {
    type: "Framework", group: "disab", name: "Recovery Framework (Mental Health)",
    desc: "Recovery is a personal process of building a hopeful, meaningful life, with or without full symptom remission.",
    chips: ["Connectedness", "Hope and optimism", "Identity", "Meaning in life", "Empowerment", "Personal recovery"],
    seminal: "Anthony, W. A. (1993). Recovery from mental illness: The guiding vision of the mental health service system in the 1990s. *Psychosocial Rehabilitation Journal, 16*(4), 11–23. https://doi.org/10.1037/h0095655",
    origins: [],
    revisions: [{tag: "Extended", cite: "Leamy, M., Bird, V., Le Boutillier, C., Williams, J., & Slade, M. (2011). Conceptual framework for personal recovery in mental health: Systematic review and narrative synthesis. *British Journal of Psychiatry, 199*(6), 445–452. https://doi.org/10.1192/bjp.bp.110.083733", note: "Synthesized 97 studies into the CHIME processes of personal recovery."}],
    props: [
      "Recovery is a personal process of changing attitudes, values, goals, and roles to live a satisfying, hopeful, contributing life even with limitations from illness.",
      "Recovery can occur without professional help, but it needs people who believe in the person; it can continue when symptoms recur.",
      "Recovery is not linear and addresses the consequences of illness (disability, stigma, lost roles), not only symptoms.",
      "Personal recovery involves five processes: connectedness, hope and optimism, identity, meaning in life, and empowerment (CHIME)."
    ]
  },
  SELFSTIGMA: {
    type: "Model", group: "disab", name: "Progressive Model of Self-Stigma",
    desc: "Self-stigma develops in stages, from knowing stereotypes to applying them to oneself, and leads to the 'why try' effect.",
    chips: ["Awareness of stereotypes", "Agreement", "Application to self", "Self-esteem", "Self-efficacy", "Why try effect"],
    seminal: "Corrigan, P. W., Rafacz, J., & Rüsch, N. (2011). Examining a progressive model of self-stigma and its impact on people with serious mental illness. *Psychiatry Research, 189*(3), 339–343. https://doi.org/10.1016/j.psychres.2011.05.024",
    origins: [{cite: "Corrigan, P. W., & Watson, A. C. (2002). The paradox of self-stigma and mental illness. *Clinical Psychology: Science and Practice, 9*(1), 35–53. https://doi.org/10.1093/clipsy.9.1.35", note: "Self-stigma can lead to lower self-esteem, to righteous anger, or to indifference."}],
    revisions: [{tag: "Extended", cite: "Corrigan, P. W., Larson, J. E., & Rüsch, N. (2009). Self-stigma and the “why try” effect: Impact on life goals and evidence-based practices. *World Psychiatry, 8*(2), 75–81. https://doi.org/10.1002/j.2051-5545.2009.tb00218.x", note: "Linked self-stigma to giving up on life goals."}],
    props: [
      "Awareness: the person knows the public stereotypes about mental illness.",
      "Agreement: the person endorses those stereotypes.",
      "Application: the person applies them to themselves.",
      "Harm: lower self-esteem and self-efficacy, less hope, and the why try effect, giving up on life goals."
    ]
  },
  LIPSKY: {
    type: "Theory", group: "macro", name: "Street-Level Bureaucracy",
    desc: "Front-line workers such as social workers use discretion under heavy demand, and their coping routines become policy as clients experience it.",
    chips: ["Worker discretion", "Inadequate resources", "Coping routines", "Rationing of services", "Policy as delivered"],
    seminal: "Lipsky, M. (1980). *Street-level bureaucracy: Dilemmas of the individual in public services*. Russell Sage Foundation.",
    origins: [],
    revisions: [{tag: "Extended", cite: "Lipsky, M. (2010). *Street-level bureaucracy: Dilemmas of the individual in public service* (30th anniversary expanded ed.). Russell Sage Foundation.", note: "Adds a chapter on managing street-level bureaucracy, looking back at accountability and performance reforms."}],
    props: [
      "Front-line public workers (social workers, police, teachers) use real discretion under inadequate resources and vague, conflicting goals.",
      "Because demand rises to meet supply, workers cope by building routines, rationing services, controlling clients, and simplifying how they see clients.",
      "Added together, these decisions become the agency's policy as citizens experience it."
    ]
  },
  KINGDON: {
    type: "Framework", group: "macro", name: "Multiple Streams Framework (Kingdon)",
    desc: "Policy change happens when problems, solutions, and politics come together in a brief window, often pushed by policy entrepreneurs.",
    chips: ["Problem stream", "Policy stream", "Politics stream", "Policy window", "Policy entrepreneurs", "Agenda change"],
    seminal: "Kingdon, J. W. (1984). *Agendas, alternatives, and public policies*. Little, Brown.",
    origins: [],
    revisions: [
      {tag: "Revised", cite: "Kingdon, J. W. (2011). *Agendas, alternatives, and public policies* (Updated 2nd ed.). Longman.", note: "Current edition, with an epilogue applying the streams to health care reform."},
      {tag: "Extended", cite: "Herweg, N., Huß, C., & Zohlnhöfer, R. (2015). Straightening the three streams: Theorising extensions of the multiple streams framework. *European Journal of Political Research, 54*(3), 435–449. https://doi.org/10.1111/1475-6765.12089", note: "Separates agenda coupling from decision coupling."}
    ],
    props: [
      "Three largely independent streams run through government: problems, policies (solutions), and politics (national mood, interest groups, turnover).",
      "A policy window opens briefly, usually through a focusing event or a change in administration.",
      "Policy entrepreneurs attach their solutions to problems and political conditions while the window is open; an item reaches the decision agenda when all three streams are joined."
    ]
  },
  INSTITUTIONAL: {
    type: "Theory", group: "macro", name: "Institutional Theory",
    desc: "Organizations adopt structures to look legitimate, not only to be efficient, and organizations in the same field become alike.",
    chips: ["Legitimacy", "Coercive pressure", "Mimetic pressure", "Normative pressure", "Isomorphism", "Decoupling"],
    seminal: "Meyer, J. W., & Rowan, B. (1977). Institutionalized organizations: Formal structure as myth and ceremony. *American Journal of Sociology, 83*(2), 340–363. https://doi.org/10.1086/226550",
    origins: [],
    revisions: [
      {tag: "Extended", cite: "DiMaggio, P. J., & Powell, W. W. (1983). The iron cage revisited: Institutional isomorphism and collective rationality in organizational fields. *American Sociological Review, 48*(2), 147–160. https://doi.org/10.2307/2095101", note: "Added coercive, mimetic, and normative isomorphism."},
      {tag: "Extended", cite: "Scott, W. R. (1995). *Institutions and organizations*. SAGE.", note: "Regulative, normative, and cultural-cognitive pillars of institutions."}
    ],
    props: [
      "Organizations adopt structures and practices their environment treats as rational and appropriate, to gain legitimacy and resources.",
      "Organizations in the same field become alike through coercive (laws, funders), mimetic (copying peers under uncertainty), and normative (professional) pressures.",
      "To protect legitimacy, organizations often decouple formal structure from day-to-day work (Meyer & Rowan)."
    ]
  },
  DIFFUSION: {
    type: "Theory", group: "macro", name: "Diffusion of Innovations",
    desc: "New ideas and practices spread through social systems over time, faster when they are seen as advantageous, compatible, simple, and visible.",
    chips: ["Relative advantage", "Compatibility", "Complexity", "Trialability", "Observability", "Adoption"],
    seminal: "Rogers, E. M. (1962). *Diffusion of innovations*. Free Press.",
    origins: [],
    revisions: [{tag: "Revised", cite: "Rogers, E. M. (2003). *Diffusion of innovations* (5th ed.). Free Press.", note: "Current edition."}],
    props: [
      "Diffusion is how an innovation is communicated through certain channels over time among members of a social system.",
      "Relative advantage, compatibility, trialability, and observability speed adoption; complexity slows it.",
      "People move through five stages: knowledge, persuasion, decision, implementation, confirmation.",
      "Adopters range from innovators to laggards, and cumulative adoption follows an S-shaped curve."
    ]
  },
  CFIR: {
    type: "Framework", group: "macro", name: "Consolidated Framework for Implementation Research (CFIR)",
    desc: "Whether a practice is implemented well depends on the practice, the outer and inner settings, the people involved, and the process.",
    chips: ["Innovation characteristics", "Outer setting", "Inner setting", "Individuals", "Implementation process", "Implementation outcomes"],
    seminal: "Damschroder, L. J., Aron, D. C., Keith, R. E., Kirsh, S. R., Alexander, J. A., & Lowery, J. C. (2009). Fostering implementation of health services research findings into practice: A consolidated framework for advancing implementation science. *Implementation Science, 4*, Article 50. https://doi.org/10.1186/1748-5908-4-50",
    origins: [],
    revisions: [{tag: "Revised", cite: "Damschroder, L. J., Reardon, C. M., Widerquist, M. A. O., & Lowery, J. (2022). The updated Consolidated Framework for Implementation Research based on user feedback. *Implementation Science, 17*, Article 75. https://doi.org/10.1186/s13012-022-01245-0", note: "Renamed and added constructs and separated implementation outcomes from innovation outcomes."}],
    props: [
      "Implementation depends on five domains: the innovation, the outer setting, the inner setting, the individuals involved, and the implementation process.",
      "Each domain has constructs (for example, adaptability, implementation climate, leadership engagement) used to assess barriers and facilitators.",
      "The framework predicts implementation outcomes; whether the innovation itself works is a separate question (2022)."
    ]
  },
  RESDEP: {
    type: "Theory", group: "macro", name: "Resource Dependence Theory",
    desc: "Organizations depend on outside actors for resources, so those actors shape their goals and services.",
    chips: ["Resource scarcity", "Funder power", "Dependence", "Compliance", "Mission drift", "Funding diversification"],
    seminal: "Pfeffer, J., & Salancik, G. R. (1978). *The external control of organizations: A resource dependence perspective*. Harper & Row.",
    origins: [],
    revisions: [{tag: "Restated", cite: "Pfeffer, J., & Salancik, G. R. (2003). *The external control of organizations: A resource dependence perspective*. Stanford University Press.", note: "Reissue with a new introduction."}],
    props: [
      "Organizations cannot generate all the resources they need, so they depend on outside actors (funders, governments, partners).",
      "The more critical and scarce a resource, and the fewer its sources, the more power its provider has.",
      "Organizations comply with the actors they depend on most, which shapes their goals and services (for example, funder-driven mission drift).",
      "Organizations manage dependence by diversifying funding, co-opting, partnering, merging, and political action."
    ]
  },
  HISTTRAUMA: {
    type: "Theory", group: "indig", name: "Historical Trauma (Brave Heart)",
    desc: "Massive group trauma such as colonization causes cumulative wounding across generations, with a recognizable historical trauma response.",
    chips: ["Historical trauma exposure", "Historical trauma response", "Historical unresolved grief", "Current structural stressors", "Cultural reconnection", "Well-being"],
    seminal: "Brave Heart, M. Y. H. (2003). The historical trauma response among Natives and its relationship with substance abuse: A Lakota illustration. *Journal of Psychoactive Drugs, 35*(1), 7–13. https://doi.org/10.1080/02791072.2003.10399988",
    origins: [{cite: "Brave Heart, M. Y. H., & DeBruyn, L. M. (1998). The American Indian holocaust: Healing historical unresolved grief. *American Indian and Alaska Native Mental Health Research, 8*(2), 60–82. https://doi.org/10.5820/aian.0802.1998.60", note: "Introduced historical unresolved grief."}],
    revisions: [
      {tag: "Extended", cite: "Walters, K. L., Mohammed, S. A., Evans-Campbell, T., Beltrán, R. E., Chae, D. H., & Duran, B. (2011). Bodies don't just tell stories, they tell histories: Embodiment of historical trauma among American Indians and Alaska Natives. *Du Bois Review: Social Science Research on Race, 8*(1), 179–189. https://doi.org/10.1017/S1742058X1100018X", note: "Historical trauma becomes embodied in present-day physical health."},
      {tag: "Challenged", cite: "Kirmayer, L. J., Gone, J. P., & Moses, J. (2014). Rethinking historical trauma. *Transcultural Psychiatry, 51*(3), 299–319. https://doi.org/10.1177/1363461514536358", note: "Current suffering reflects ongoing structural violence as much as past trauma; emphasizes resilience."}
    ],
    props: [
      "Historical trauma is cumulative emotional and psychological wounding over the lifespan and across generations from massive group trauma (colonization, forced relocation, boarding schools).",
      "The historical trauma response includes depression, self-destructive behavior, suicidal thoughts, anxiety, anger, and substance use to numb pain.",
      "Historical unresolved grief accompanies the response.",
      "Effects pass across generations through psychological, family, community, and biological pathways (Walters et al., 2011).",
      "Healing involves collective remembering, reconnecting with culture and ceremony, and resolving grief."
    ],
    use: "Treat historical trauma exposure as a background cause and the trauma response or unresolved grief as a mediator. Add current structural stressors as a separate path (Kirmayer et al., 2014)."
  },
  INDIGENIST: {
    type: "Model", group: "indig", name: "Indigenist Stress-Coping Model",
    desc: "Traumatic stressors harm Native health, and cultural factors buffer that harm.",
    chips: ["Historical trauma", "Discrimination", "Traumatic life events", "Identity attitudes", "Enculturation", "Spiritual coping", "Traditional healing practices", "Health outcomes"],
    seminal: "Walters, K. L., & Simoni, J. M. (2002). Reconceptualizing Native women's health: An “indigenist” stress-coping model. *American Journal of Public Health, 92*(4), 520–524. https://doi.org/10.2105/AJPH.92.4.520",
    origins: [],
    revisions: [],
    props: [
      "Native women's health sits within their status as a colonized people.",
      "Traumatic stressors (historical trauma, discrimination, traumatic life events) affect physical health, mental health, and substance use.",
      "Cultural factors (identity attitudes, enculturation, spiritual coping, traditional healing practices) buffer the stressor–health link (moderation).",
      "The model centers cultural strengths rather than deficits."
    ]
  },
  EVANSCAMP: {
    type: "Framework", group: "indig", name: "Multilevel Framework of Historical Trauma (Evans-Campbell)",
    desc: "Historical trauma affects individuals, families, and communities, and interacts with current stressors.",
    chips: ["Historically traumatic events", "Individual impacts", "Family impacts", "Community impacts", "Contemporary stressors"],
    seminal: "Evans-Campbell, T. (2008). Historical trauma in American Indian/Native Alaska communities: A multilevel framework for exploring impacts on individuals, families, and communities. *Journal of Interpersonal Violence, 23*(3), 316–338. https://doi.org/10.1177/0886260507312290",
    origins: [],
    revisions: [],
    props: [
      "A historically traumatic event is widespread in a group, carried out by outsiders with destructive intent, and produces high collective distress.",
      "Such events can be discrete or chronic and accumulate across generations.",
      "Impacts occur at three linked levels: individual, family, and community.",
      "Historical trauma interacts with contemporary stressors to shape current well-being (moderation)."
    ]
  },
  RBTS: {
    type: "Model", group: "indig", name: "Race-Based Traumatic Stress (Carter)",
    desc: "Experiences of racism that are painful, sudden, and uncontrollable can cause trauma-like injury.",
    chips: ["Racism encounters", "Race-based traumatic stress", "Intrusion", "Avoidance", "Arousal", "Depression and anger"],
    seminal: "Carter, R. T. (2007). Racism and psychological and emotional injury: Recognizing and assessing race-based traumatic stress. *The Counseling Psychologist, 35*(1), 13–105. https://doi.org/10.1177/0011000006292033",
    origins: [],
    revisions: [{tag: "Extended", cite: "Comas-Díaz, L., Hall, G. N., & Neville, H. A. (2019). Racial trauma: Theory, research, and healing: Introduction to the special issue. *American Psychologist, 74*(1), 1–5. https://doi.org/10.1037/amp0000442", note: "Introduces a special issue that builds on racial trauma theory."}],
    props: [
      "A racism encounter is traumatic when it is experienced as emotionally painful, sudden, and uncontrollable.",
      "Reactions include intrusion, arousal, and avoidance, along with depression, anger, guilt or shame, and low self-esteem.",
      "Race-based traumatic stress is an injury, not a mental disorder.",
      "Assessment links specific racism encounters to the reactions that follow."
    ],
    use: "Racism encounters are the cause; race-based traumatic stress is a mediator or outcome. Do not treat it as a psychiatric diagnosis."
  },
  DECOLON: {
    type: "Critical perspective", group: "indig", name: "Decolonizing and Indigenous Research Methodologies", critical: true,
    desc: "Research has served colonization; Indigenous peoples should control research about them, guided by relational accountability.",
    chips: ["Indigenous data sovereignty", "Relational accountability", "Community control of research"],
    seminal: "Smith, L. T. (1999). *Decolonizing methodologies: Research and Indigenous peoples*. Zed Books.",
    origins: [],
    revisions: [
      {tag: "Revised", cite: "Smith, L. T. (2021). *Decolonizing methodologies: Research and Indigenous peoples* (3rd ed.). Zed Books. https://doi.org/10.5040/9781350225282", note: "Current edition."},
      {tag: "Extended", cite: "Wilson, S. (2008). *Research is ceremony: Indigenous research methods*. Fernwood Publishing.", note: "An Indigenous research paradigm built on relational accountability."}
    ],
    props: [
      "Western research has been tied to imperialism and colonization.",
      "Indigenous peoples should set research agendas and control research about their communities, including who owns the data.",
      "Knowledge is relational; research is accountable to those relationships (Wilson).",
      "Indigenous knowledge systems are legitimate ways of knowing, not just data sources."
    ],
    use: "These are tenets, not arrows. They guide who defines concepts and outcomes and who interprets findings, and they support community-based participatory designs, tribal approval, and Indigenous data sovereignty."
  },
  SETTLER: {
    type: "Critical perspective", group: "indig", name: "Settler Colonialism", critical: true,
    desc: "Settler colonialism is a continuing structure, not a past event, aimed at replacing Indigenous peoples on the land.",
    chips: ["Land dispossession", "Assimilation policy", "Child removal", "Structural violence"],
    seminal: "Wolfe, P. (2006). Settler colonialism and the elimination of the native. *Journal of Genocide Research, 8*(4), 387–409. https://doi.org/10.1080/14623520601056240",
    origins: [],
    revisions: [{tag: "Extended", cite: "Fortier, C., & Wong, E. H.-S. (2019). The settler colonialism of social work and the social work of settler colonialism. *Settler Colonial Studies, 9*(4), 437–456. https://doi.org/10.1080/2201473X.2018.1519962", note: "Examines social work's role in settler colonialism, including child removal."}],
    props: [
      "Invasion is a structure, not an event (Wolfe, 2006, p. 388).",
      "Settler colonialism follows a logic of elimination aimed at gaining land: it destroys to replace.",
      "Elimination works through removal, assimilation, and legal and land regimes, not only killing.",
      "Because it is a structure, it continues through law, land policy, and institutions, including welfare and child removal systems."
    ],
    use: "These are tenets, not arrows. Use settler colonialism as the macro-level context that explains why stressors persist, and pair it with measurable concepts such as current structural stressors."
  },
  EMPOWER: {
    type: "Theory",
    group: "power", name: "Empowerment Theory (Psychological Empowerment)",
    desc: "People and communities gain control over their lives through participation, critical awareness, and a sense of control.",
    chips: ["Participation", "Perceived control", "Critical awareness", "Psychological empowerment"],
    seminal: "Zimmerman, M. A. (1995). Psychological empowerment: Issues and illustrations. *American Journal of Community Psychology, 23*(5), 581–599. https://doi.org/10.1007/BF02506983",
    origins: [
      {cite: "Solomon, B. B. (1976). *Black empowerment: Social work in oppressed communities*. Columbia University Press.", note: "Empowerment in social work."},
      {cite: "Rappaport, J. (1987). Terms of empowerment/exemplars of prevention: Toward a theory for community psychology. *American Journal of Community Psychology, 15*(2), 121–148. https://doi.org/10.1007/BF00919275", note: "Empowerment in community psychology."},
      {cite: "Gutiérrez, L. M. (1990). Working with women of color: An empowerment perspective. *Social Work, 35*(2), 149–153. https://doi.org/10.1093/sw/35.2.149", note: "Empowerment practice in social work."}
    ],
    revisions: [],
    props: [
      "Participation in community organizations leads to more psychological empowerment.",
      "Psychological empowerment has three parts: intrapersonal (perceived control, self-efficacy), interactional (critical awareness, knowing how to mobilize resources), and behavioral (participation, coping).",
      "The three parts are related and reinforce each other, for example perceived control and participation."
    ]
  },
  CRT: {
    type: "Critical perspective",
    group: "power", name: "Critical Race Theory", critical: true,
    desc: "Racism is ordinary and built into laws and institutions, not only individual acts.",
    chips: ["Structural racism", "Experienced discrimination", "Residential segregation"],
    seminal: "Bell, D. A., Jr. (1980). *Brown v. Board of Education* and the interest-convergence dilemma. *Harvard Law Review, 93*(3), 518–533. https://doi.org/10.2307/1340546",
    origins: [{cite: "Crenshaw, K., Gotanda, N., Peller, G., & Thomas, K. (Eds.). (1995). *Critical race theory: The key writings that formed the movement*. The New Press.", note: "Collection of the founding writings."}],
    revisions: [{tag: "Introduction", cite: "Delgado, R., & Stefancic, J. (2023). *Critical race theory: An introduction* (4th ed.). New York University Press.", note: "Standard introduction to the tenets, now in its fourth edition."}],
    props: [
      "Racism is ordinary, not unusual.",
      "Gains for people of color come mainly when they converge with the interests of White elites (interest convergence).",
      "Race is socially constructed.",
      "Different groups are racialized in different ways at different times (differential racialization).",
      "Intersectionality and anti-essentialism: no person has a single, unitary identity.",
      "The experiences of people of color are a source of knowledge (voice, counter-storytelling)."
    ],
    use: "These are tenets, not arrows. In a model, Critical Race Theory treats racism, not race, as the explanatory concept. It frames the problem and guides the choice of structural causes (residential segregation) and mechanisms (experienced discrimination), which can enter as causes, in-between concepts, or moderators."
  },
  INTERSECT: {
    type: "Critical perspective",
    group: "power", name: "Intersectionality", critical: true,
    desc: "Social positions such as race, gender, and class combine; their effects are not simply added together.",
    chips: ["Race", "Gender", "Class", "Discrimination"],
    seminal: "Crenshaw, K. (1989). Demarginalizing the intersection of race and sex: A Black feminist critique of antidiscrimination doctrine, feminist theory and antiracist politics. *University of Chicago Legal Forum, 1989*(1), 139–167.",
    origins: [],
    revisions: [
      {tag: "Extended", cite: "Crenshaw, K. (1991). Mapping the margins: Intersectionality, identity politics, and violence against women of color. *Stanford Law Review, 43*(6), 1241–1299. https://doi.org/10.2307/1229039", note: "Extended the concept (structural, political, and representational intersectionality)."},
      {tag: "Extended", cite: "Collins, P. H. (1990). *Black feminist thought: Knowledge, consciousness, and the politics of empowerment*. Unwin Hyman.", note: "Interlocking systems of oppression and the matrix of domination."},
      {tag: "Methods", cite: "Bowleg, L. (2008). When Black + lesbian + woman ≠ Black lesbian woman: The methodological challenges of qualitative and quantitative intersectionality research. *Sex Roles, 59*(5–6), 312–325. https://doi.org/10.1007/s11199-008-9400-z", note: "Methods guidance for intersectional research."}
    ],
    props: [
      "Social positions (race, gender, class, and others) combine.",
      "Their effects are not simply added together.",
      "Systems of power interlock (Collins: interlocking systems of oppression, the matrix of domination)."
    ],
    use: "These are tenets, not arrows. In quantitative models, intersecting positions are often tested as interactions (moderation). An interaction tests whether the effects of categories combine, not the power relations that produce them, so interpret results in their structural context (Bowleg, 2008)."
  }
};

/* Shared display helpers for the app and the library page. */
window.THEORY_TYPES = [
  ["Theory", "Explains why something happens. Its propositions become your arrows."],
  ["Model", "Lays out specific concepts and paths, often narrower than a theory or drawn from one. The paths are usually stated."],
  ["Framework", "Organizes concepts into categories or domains. It tells you what to look at, not always how the parts affect each other, so you supply the arrows from the source or from research."],
  ["Hypothesis", "One proposed relationship, often a single arrow or one moderator."],
  ["Typology", "Sorts people into groups. In a model, the groups are usually an outcome or a moderator."],
  ["Approach", "A broad way of defining the problem. Use it to frame your model and choose concepts; supply the arrows from research."],
  ["Critical perspective", "Tenets that frame the problem and question power. It does not supply testable arrows."]
];
window.TheoryLib = (function(){
  var LIB = window.THEORY_LIB, G = window.THEORY_GROUPS;
  var TYPE_NOTE = {Framework: "This is a framework: it names categories. You supply the arrows between them, from the source or from research, and justify each one.", Typology: "This is a typology: it sorts people into groups. Use the groups as an outcome or as a moderator.", Approach: "This is an approach: it frames the problem. You supply the arrows from research.", Hypothesis: "This is a hypothesis: one proposed relationship. Pair it with a theory for the rest of your model."};
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"']/g, function(c){ return {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}[c]; }); }
  function plainCite(c){ return String(c || "").replace(/\*/g, ""); }
  function citeHTML(c){ return esc(c).replace(/\*([^*]+)\*/g, "<em>$1</em>"); }
  /* "Fishbein & Ajzen (2010)"; three or more authors: "Smith et al. (2020)" */
  function authYear(c){
    var m = plainCite(c).match(/^\s*([^(]+?)\s*\((\d{4}[a-z]?)/); if(!m) return "";
    var n = m[1].replace(/\s*&\s*/g, ", ").split(/\s*,\s*/).map(function(x){ return x.trim().replace(/\.$/, ""); })
      .filter(function(x){ return x && !/^(?:[A-Z]\.?\s*-?\s*)+$/.test(x + ".") && !/^(Jr|Sr|II|III|IV|Eds?)$/.test(x); });
    return (n.length === 1 ? n[0] : n.length === 2 ? n[0] + " & " + n[1] : n[0] + " et al.") + " (" + m[2] + ")";
  }
  function revisedLine(k){
    var L = LIB[k]; if(!L) return "";
    var r = (L.revisions || []).filter(function(x){ return x.tag === "Revised"; }).map(function(x){ return authYear(x.cite); });
    return r.length ? "Substantially revised by " + (r.length > 2 ? r.slice(0, -1).join(", ") + ", and " + r[r.length - 1] : r.join(" and ")) + "." : "";
  }
  function keysIn(g){ return Object.keys(LIB).filter(function(k){ return LIB[k].group === g; }); }
  function matches(k, q){ if(!q) return true; var L = LIB[k]; return (L.name + " " + L.desc + " " + L.chips.join(" ") + " " + (L.type || "")).toLowerCase().indexOf(q.toLowerCase()) >= 0; }
  function options(sel, q){
    return G.map(function(g){ var ks = keysIn(g[0]).filter(function(k){ return k === sel || matches(k, q); }); return ks.length ? '<optgroup label="' + esc(g[1]) + '">' + ks.map(function(k){ return '<option value="' + k + '"' + (sel === k ? " selected" : "") + '>' + esc(LIB[k].name) + '</option>'; }).join("") + '</optgroup>' : ""; }).join("") +
      '<option value="custom"' + (sel === "custom" ? " selected" : "") + '>Type my own…</option>';
  }
  function card(k, full){
    var L = LIB[k]; if(!L) return "";
    var rv = revisedLine(k), h = '<div class="libcard">';
    if(!full) h += '<p class="lib-desc"><span class="lib-type" data-type="' + esc(L.type || "Theory") + '">' + esc(L.type || "Theory") + '</span> ' + esc(L.desc) + '</p>';
    if(TYPE_NOTE[L.type]) h += '<p class="lib-use"><strong>Note:</strong> ' + esc(TYPE_NOTE[L.type]) + '</p>';
    if(rv) h += '<p class="lib-rev"><strong>Revised:</strong> ' + esc(rv) + '</p>';
    if(L.use) h += '<p class="lib-use"><strong>' + (L.critical ? "How it is used in a model" : "Note") + ':</strong> ' + esc(L.use) + '</p>';
    h += '<p class="lib-h">Seminal source</p><p class="citeref">' + citeHTML(L.seminal) + '</p>';
    h += '<p class="lib-h">' + (L.critical ? "Main tenets" : "Common propositions") + '</p><ol class="lib-props">' + L.props.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ol>';
    h += '<p class="small lib-warn">These are paraphrased. You do not need all of them: use only the ones your model needs, and you can combine them with propositions from another theory. Find each one you use in the source and copy its exact wording and page number on the Key propositions step.</p>';
    h += '<p class="lib-h">Key concepts</p><p class="lib-chips">' + L.chips.map(function(c){ return '<span class="lchip">' + esc(c) + '</span>'; }).join("") + '</p>';
    var more = (L.revisions || []).map(function(x){ return '<li><span class="lib-tag">' + esc(x.tag) + '</span> <span class="citeref" style="display:inline">' + citeHTML(x.cite) + '</span> ' + esc(x.note) + '</li>'; })
      .concat((L.origins || []).map(function(x){ return '<li><span class="lib-tag">Origin</span> <span class="citeref" style="display:inline">' + citeHTML(x.cite) + '</span> ' + esc(x.note) + '</li>'; }));
    if(full) h += '<p class="lib-use-btn"><a class="btn sm" href="index.html?theory=' + k + '">Use this in my model</a></p>';
    if(more.length) h += full ? '<p class="lib-h">Revisions, extensions, and origins</p><ul class="lib-more">' + more.join("") + '</ul>'
      : '<details class="lib-det"><summary>Revisions, extensions, and origins (' + more.length + ')</summary><ul class="lib-more">' + more.join("") + '</ul></details>';
    return h + '</div>';
  }
  return {matches: matches, esc: esc, plainCite: plainCite, citeHTML: citeHTML, authYear: authYear, revisedLine: revisedLine, options: options, card: card, keysIn: keysIn};
})();
