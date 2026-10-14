/* Social Theory Model Builder: theory library.
   References were checked against CrossRef, PubMed, publisher pages, and library catalogs (October 2026).
   Text between asterisks (*like this*) is italic in APA 7. Propositions are paraphrased; students find the
   exact wording and page number in the source. Shared by index.html and library.html. */
window.THEORY_GROUPS = [
  ["health", "Health behavior"],
  ["stress", "Stress, coping, and support"],
  ["services", "Health services and inequality"],
  ["develop", "Human development and family"],
  ["crime", "Crime and deviance"],
  ["power", "Empowerment and critical theories"]
];
window.THEORY_LIB = {
  TPB: {
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
    group: "services", name: "Andersen Behavioral Model of Health Services Use",
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
    group: "services", name: "Fundamental Cause Theory",
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
  EMPOWER: {
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
window.TheoryLib = (function(){
  var LIB = window.THEORY_LIB, G = window.THEORY_GROUPS;
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
    return r.length ? "This theory was substantially revised by " + (r.length > 2 ? r.slice(0, -1).join(", ") + ", and " + r[r.length - 1] : r.join(" and ")) + "." : "";
  }
  function keysIn(g){ return Object.keys(LIB).filter(function(k){ return LIB[k].group === g; }); }
  function options(sel){
    return G.map(function(g){ var ks = keysIn(g[0]); return ks.length ? '<optgroup label="' + esc(g[1]) + '">' + ks.map(function(k){ return '<option value="' + k + '"' + (sel === k ? " selected" : "") + '>' + esc(LIB[k].name) + '</option>'; }).join("") + '</optgroup>' : ""; }).join("") +
      '<option value="custom"' + (sel === "custom" ? " selected" : "") + '>Type my own…</option>';
  }
  function card(k, full){
    var L = LIB[k]; if(!L) return "";
    var rv = revisedLine(k), h = '<div class="libcard">';
    h += '<p class="lib-desc">' + esc(L.desc) + '</p>';
    if(rv) h += '<p class="lib-rev"><strong>Note:</strong> ' + esc(rv) + '</p>';
    if(L.use) h += '<p class="lib-use"><strong>' + (L.critical ? "How it is used in a model" : "Note") + ':</strong> ' + esc(L.use) + '</p>';
    h += '<p class="lib-h">Seminal source</p><p class="citeref">' + citeHTML(L.seminal) + '</p>';
    h += '<p class="lib-h">' + (L.critical ? "Main tenets" : "Common propositions") + '</p><ol class="lib-props">' + L.props.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ol>';
    h += '<p class="small lib-warn">These are paraphrased. Find each one in the source and copy its exact wording and page number on the Key propositions step.</p>';
    h += '<p class="lib-h">Key concepts</p><p class="lib-chips">' + L.chips.map(function(c){ return '<span class="lchip">' + esc(c) + '</span>'; }).join("") + '</p>';
    var more = (L.revisions || []).map(function(x){ return '<li><span class="lib-tag">' + esc(x.tag) + '</span> <span class="citeref" style="display:inline">' + citeHTML(x.cite) + '</span> ' + esc(x.note) + '</li>'; })
      .concat((L.origins || []).map(function(x){ return '<li><span class="lib-tag">Origin</span> <span class="citeref" style="display:inline">' + citeHTML(x.cite) + '</span> ' + esc(x.note) + '</li>'; }));
    if(more.length) h += full ? '<p class="lib-h">Revisions, extensions, and origins</p><ul class="lib-more">' + more.join("") + '</ul>'
      : '<details class="lib-det"><summary>Revisions, extensions, and origins (' + more.length + ')</summary><ul class="lib-more">' + more.join("") + '</ul></details>';
    return h + '</div>';
  }
  return {esc: esc, plainCite: plainCite, citeHTML: citeHTML, authYear: authYear, revisedLine: revisedLine, options: options, card: card, keysIn: keysIn};
})();
