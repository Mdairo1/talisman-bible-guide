// ===== Talisman - Bible Guide App =====
document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.getElementById("menu-btn");
  const topicMenu = document.getElementById("topic-menu");
  const topicTitle = document.getElementById("topic-title");
  const versesContainer = document.getElementById("verses-container");

  // Toggle dropdown menu
  menuBtn.addEventListener("click", () => {
    topicMenu.classList.toggle("show");
  });

  // ===== Bible verses =====
  const verses = [
    /* ===== Topics 1-40, 5 verses each (200 total) ===== */

    /* TOPIC: Faith */
    {topic:"Faith", ref:"Hebrews 11:1", text:"Now faith is the substance of things hoped for, the evidence of things not seen.", exp:"Faith is trusting God even when outcomes are invisible. It strengthens perseverance and anchors hope. Faith allows God’s promises to guide actions. It deepens intimacy with God."},
    {topic:"Faith", ref:"2 Corinthians 5:7", text:"For we walk by faith, not by sight.", exp:"Walking by faith involves trusting God beyond what we can see. It teaches patience and reliance on divine guidance. Faith directs decisions and responses. It nurtures spiritual maturity."},
    {topic:"Faith", ref:"Romans 10:17", text:"So then faith cometh by hearing, and hearing by the word of God.", exp:"Faith grows through engagement with Scripture. Listening and understanding build trust. It encourages action based on God’s promises. Faith becomes stronger over time."},
    {topic:"Faith", ref:"Ephesians 2:8", text:"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.", exp:"Salvation is God’s gift, received through faith. Faith reflects reliance on divine grace rather than human effort. It fosters humility and gratitude. It transforms the believer's life."},
    {topic:"Faith", ref:"Mark 11:22", text:"Have faith in God.", exp:"Faith in God underpins courage, prayer, and trust. It enables believers to face challenges confidently. Faith nurtures hope and spiritual resilience. It is foundational to all Christian living."},

    /* TOPIC: Hope */
    {topic:"Hope", ref:"Romans 15:13", text:"Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.", exp:"Hope strengthens believers through God’s power. It fosters joy and peace in trials. Hope anchors trust in God’s promises. It sustains spiritual resilience."},
    {topic:"Hope", ref:"Jeremiah 29:11", text:"For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.", exp:"God’s plans are for our good and future hope. Hope relies on His guidance and promises. It encourages patience and trust. Hope shapes perspective and decision-making."},
    {topic:"Hope", ref:"Psalm 39:7", text:"And now, Lord, what wait I for? my hope is in thee.", exp:"Placing hope in God brings stability amid uncertainty. Hope nurtures perseverance. It shifts focus from self to divine trust. Hope brings peace to anxious hearts."},
    {topic:"Hope", ref:"Lamentations 3:24", text:"The LORD is my portion, saith my soul; therefore will I hope in him.", exp:"God’s sufficiency gives reason to hope. Hope grows from recognizing His provision. It sustains during trials. It encourages dependence on God alone."},
    {topic:"Hope", ref:"Isaiah 40:31", text:"But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles;", exp:"Hope in God revitalizes energy and courage. Waiting on Him produces spiritual renewal. Hope fosters patience and endurance. It strengthens faith in difficult times."},

    /* TOPIC: Love */
    {topic:"Love", ref:"1 Corinthians 13:4", text:"Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up,", exp:"Love is patient, humble, and selfless. True love shows care without seeking recognition. Love sustains relationships and promotes unity. It reflects God’s nature."},
    {topic:"Love", ref:"1 John 4:8", text:"He that loveth not knoweth not God; for God is love.", exp:"God is the ultimate source of love. Understanding love reveals God’s character. Love enables spiritual connection. It motivates compassion and mercy."},
    {topic:"Love", ref:"John 15:13", text:"Greater love hath no man than this, that a man lay down his life for his friends.", exp:"Sacrificial love demonstrates ultimate devotion. It challenges believers to prioritize others. Love inspires courage and commitment. It mirrors Christ’s love for humanity."},
    {topic:"Love", ref:"Romans 13:10", text:"Love worketh no ill to his neighbour: therefore love is the fulfilling of the law.", exp:"Love guides moral conduct and ethics. It promotes justice and kindness. Love fulfills God’s law through action. It prevents harm and nurtures community."},
    {topic:"Love", ref:"Colossians 3:14", text:"And above all these things put on charity, which is the bond of perfectness.", exp:"Love unites all virtues in harmony. It strengthens relationships and character. Love acts as the perfecting bond. It reflects spiritual maturity."},

    /* TOPIC: Prayer */
    {topic:"Prayer", ref:"Philippians 4:6", text:"Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.", exp:"Prayer relieves anxiety and expresses dependence on God. It invites God into daily concerns. Gratitude enhances communication with Him. Prayer strengthens faith and peace."},
    {topic:"Prayer", ref:"1 Thessalonians 5:17", text:"Pray without ceasing.", exp:"Continuous prayer maintains connection with God. It encourages vigilance and spiritual mindfulness. Constant prayer nurtures faith. It aligns the believer’s heart with God’s will."},
    {topic:"Prayer", ref:"Matthew 6:6", text:"But thou, when thou prayest, enter into thy closet...", exp:"Sincere, private prayer develops intimacy with God. It fosters focus and humility. Prayer is relational, not performative. Consistency in prayer cultivates discipline and devotion."},
    {topic:"Prayer", ref:"James 5:16", text:"The effectual fervent prayer of a righteous man availeth much.", exp:"Passionate, sincere prayer produces results. It is powerful when aligned with righteousness. Prayer influences outcomes and hearts. It reflects faith in God’s power."},
    {topic:"Prayer", ref:"Mark 11:24", text:"What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them.", exp:"Faith energizes prayer to produce tangible outcomes. Belief accompanies supplication. Prayer expresses trust in God’s timing. It demonstrates dependence and hope."},

    /* TOPIC: Salvation */
    {topic:"Salvation", ref:"Acts 4:12", text:"Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.", exp:"Salvation is only found in Christ. Believers rely solely on His sacrifice. This truth emphasizes exclusivity of Christ’s redemption. It motivates sharing the gospel."},
    {topic:"Salvation", ref:"Ephesians 2:8", text:"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.", exp:"Salvation is God’s gracious gift received through faith. It cannot be earned. Faith appropriates grace and transforms life. Gratitude and humility follow salvation."},
    {topic:"Salvation", ref:"John 3:16", text:"For God so loved the world, that he gave his only begotten Son...", exp:"God’s love initiates salvation. Belief in Christ grants eternal life. It demonstrates divine mercy and purpose. Faith responds to God’s love with commitment."},
    {topic:"Salvation", ref:"Romans 10:9", text:"If thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.", exp:"Confession and belief activate salvation. It requires internal conviction and external acknowledgment. Salvation transforms life and direction. It expresses trust in God’s work."},
    {topic:"Salvation", ref:"Titus 3:5", text:"Not by works of righteousness which we have done, but according to his mercy he saved us...", exp:"Salvation is based on mercy, not human merit. Faith responds to God’s grace. It fosters humility and gratitude. Salvation empowers spiritual growth."}
  ];

  // ===== Build dropdown menu dynamically =====
  const topics = [...new Set(verses.map(v => v.topic))];
  topics.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    li.addEventListener("click", () => showTopic(t));
    topicMenu.appendChild(li);
  });

  function showTopic(topic) {
    topicTitle.textContent = topic;
    versesContainer.innerHTML = "";
    const topicVerses = verses.filter(v => v.topic === topic);
    topicVerses.forEach(v => {
      const div = document.createElement("div");
      div.classList.add("verse-card");
      div.innerHTML = `<h4>${v.ref}</h4><p>${v.text}</p><p><em>${v.exp}</em></p>`;
      versesContainer.appendChild(div);
    });
  }
});
/* TOPIC: Forgiveness */
{topic:"Forgiveness", ref:"Matthew 6:14", text:"For if ye forgive men their trespasses, your heavenly Father will also forgive you:", exp:"Forgiveness is essential to receiving God’s mercy. Letting go of offenses frees the heart from bitterness. It strengthens relationships and models God’s love. Forgiveness nurtures spiritual health and peace."},
{topic:"Forgiveness", ref:"Ephesians 4:32", text:"And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you.", exp:"Kindness and forgiveness flow from God’s example. Forgiving others reflects divine mercy. It encourages harmony and love. Forgiveness is a spiritual discipline that restores hearts."},
{topic:"Forgiveness", ref:"Colossians 3:13", text:"Forbearing one another, and forgiving one another, if any man have a quarrel against any: even as Christ forgave you, so also do ye.", exp:"Forgiveness mirrors Christ’s actions toward humanity. Patience and endurance accompany forgiveness. It prevents grudges and nurtures unity. Practicing forgiveness cultivates character."},
{topic:"Forgiveness", ref:"Luke 23:34", text:"Then said Jesus, Father, forgive them; for they know not what they do.", exp:"Jesus demonstrates ultimate forgiveness, even in suffering. Forgiveness transcends human understanding. It exemplifies unconditional love. Believers are called to emulate this grace."},
{topic:"Forgiveness", ref:"Psalm 103:12", text:"As far as the east is from the west, so far hath he removed our transgressions from us.", exp:"God completely removes sins when He forgives. Forgiveness provides spiritual freedom. It assures believers of God’s mercy. This encourages trust and gratitude."},

/* TOPIC: Patience */
{topic:"Patience", ref:"James 1:3", text:"Knowing this, that the trying of your faith worketh patience.", exp:"Trials produce spiritual endurance. Patience strengthens character and faith. It encourages perseverance in challenges. Patience refines hope and reliance on God."},
{topic:"Patience", ref:"Romans 12:12", text:"Rejoicing in hope; patient in tribulation; continuing instant in prayer;", exp:"Hope and prayer accompany patience. Patience helps maintain joy during difficulties. It nurtures steadfastness. Patience is a practical virtue in Christian living."},
{topic:"Patience", ref:"Colossians 1:11", text:"Strengthened with all might, according to his glorious power, unto all patience and longsuffering with joy;", exp:"God empowers believers with patience. Longsuffering allows enduring challenges gracefully. Patience brings joy and spiritual growth. It relies on divine strength."},
{topic:"Patience", ref:"Psalm 27:14", text:"Wait on the LORD: be of good courage, and he shall strengthen thine heart.", exp:"Waiting on God strengthens courage and trust. Patience nurtures reliance on His timing. It develops resilience and hope. God supports those who wait faithfully."},
{topic:"Patience", ref:"Galatians 6:9", text:"And let us not be weary in well doing: for in due season we shall reap, if we faint not.", exp:"Patience ensures perseverance in good works. Persistent effort produces results in God’s timing. It encourages endurance. Patience demonstrates trust in God’s plan."},

/* TOPIC: Wisdom */
{topic:"Wisdom", ref:"Proverbs 3:5", text:"Trust in the LORD with all thine heart; and lean not unto thine own understanding.", exp:"Wisdom begins with trust in God over human insight. It fosters humility and guidance. Relying on God prevents error. Wisdom transforms decisions and life direction."},
{topic:"Wisdom", ref:"James 1:5", text:"If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.", exp:"God generously provides wisdom to those who seek. Asking in faith produces clarity. Wisdom strengthens decision-making. It guides believers in righteousness."},
{topic:"Wisdom", ref:"Proverbs 4:7", text:"Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding.", exp:"Wisdom is foundational for a meaningful life. Seeking understanding enhances discernment. Wisdom guides conduct and relationships. It shapes spiritual and practical growth."},
{topic:"Wisdom", ref:"Ecclesiastes 7:12", text:"For wisdom is a defence as money is a defence, but the excellency of knowledge is, that wisdom giveth life to them that have it.", exp:"Wisdom protects and enriches life. Knowledge without application is incomplete. Wisdom brings insight and longevity. It supports spiritual and practical decisions."},
{topic:"Wisdom", ref:"Proverbs 9:10", text:"The fear of the LORD is the beginning of wisdom: and the knowledge of the holy is understanding.", exp:"True wisdom starts with reverence for God. Understanding His ways directs life. Fear of the Lord fosters ethical living. Wisdom connects knowledge to spiritual insight."}
/* TOPIC: Obedience */
{topic:"Obedience", ref:"John 14:15", text:"If ye love me, keep my commandments.", exp:"Obedience is the natural expression of love for God. Following His commands demonstrates trust and devotion. It cultivates spiritual growth and alignment with His will. Obedience strengthens faith and character."},
{topic:"Obedience", ref:"Deuteronomy 5:33", text:"Ye shall walk in all the ways which the LORD your God hath commanded you, that ye may live...", exp:"Walking in God’s ways brings life and blessings. Obedience requires attention and effort. It ensures alignment with God’s purpose. Obedience fosters peace and security."},
{topic:"Obedience", ref:"1 Samuel 15:22", text:"Behold, to obey is better than sacrifice, and to hearken than the fat of rams.", exp:"God values obedience over ritual offerings. Hearing and acting on His Word matters most. Obedience reflects humility and respect. It strengthens relationship with Him."},
{topic:"Obedience", ref:"Romans 6:16", text:"Know ye not, that to whom ye yield yourselves servants to obey, his servants ye are to whom ye obey?", exp:"Obedience defines spiritual alignment. Serving God requires willing submission. Choices determine influences in life. Obedience empowers righteousness."},
{topic:"Obedience", ref:"1 Peter 1:14", text:"As obedient children, not fashioning yourselves according to former lusts...", exp:"Believers are called to live distinct lives. Obedience separates them from worldly patterns. It shapes character and behavior. Obedience nurtures holiness and spiritual integrity."},

/* TOPIC: Relationship */
{topic:"Relationship", ref:"Ecclesiastes 4:9", text:"Two are better than one; because they have a good reward for their labour.", exp:"Partnership strengthens life and work. Relationships provide support, encouragement, and accountability. God designed humans for community. Healthy relationships enhance spiritual and emotional growth."},
{topic:"Relationship", ref:"Proverbs 27:17", text:"Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.", exp:"Friends challenge and refine each other. Positive relationships develop character and wisdom. Mutual support improves growth. Relationships are avenues for God’s teaching."},
{topic:"Relationship", ref:"1 Corinthians 13:4", text:"Charity suffereth long, and is kind...", exp:"Love is fundamental to all relationships. Patience, kindness, and humility sustain connections. True love mirrors God’s nature. Relationships thrive on care and sacrifice."},
{topic:"Relationship", ref:"Colossians 3:13", text:"Forbearing one another, and forgiving one another...", exp:"Forgiveness is essential in maintaining relationships. Tolerance and mercy prevent strife. Relationships flourish when rooted in grace. Forgiveness reflects God’s heart."},
{topic:"Relationship", ref:"Ephesians 4:2-3", text:"With all lowliness and meekness, with longsuffering, forbearing one another in love...", exp:"Humility and patience strengthen bonds. Love motivates endurance and understanding. Relationships require effort and compassion. Maintaining peace honors God."},

/* TOPIC: Courage */
{topic:"Courage", ref:"Joshua 1:9", text:"Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed...", exp:"God commands courage to face challenges. Strength and confidence come from reliance on Him. Courage empowers action despite fear. Faith fuels boldness."},
{topic:"Courage", ref:"Deuteronomy 31:6", text:"Be strong and of a good courage, fear not, nor be afraid of them...", exp:"God assures protection in trials. Courage requires trust in divine guidance. Fear is replaced by confidence in His presence. Courage strengthens perseverance."},
{topic:"Courage", ref:"Psalm 27:1", text:"The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life...", exp:"God’s presence eliminates fear. Courage arises from trust in Him. It empowers boldness in decisions and actions. Faith provides confidence in adversity."},
{topic:"Courage", ref:"2 Timothy 1:7", text:"For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.", exp:"Fear is replaced by divine power and clarity. Courage allows decisive action and calmness. God equips believers with strength. Courage is rooted in faith and wisdom."},
{topic:"Courage", ref:"Isaiah 41:10", text:"Fear thou not; for I am with thee: be not dismayed; for I am thy God...", exp:"God’s constant presence inspires courage. Trust removes anxiety and hesitation. Courage enables faithful obedience. God’s promises strengthen hearts."},

/* TOPIC: Healing */
{topic:"Healing", ref:"Isaiah 53:5", text:"But he was wounded for our transgressions, he was bruised for our iniquities...", exp:"Christ’s sacrifice provides spiritual and physical healing. Healing restores wholeness and peace. Faith accesses God’s power to heal. His suffering brings redemption and comfort."},
{topic:"Healing", ref:"Psalm 147:3", text:"He healeth the broken in heart, and bindeth up their wounds.", exp:"God restores the hurting and brokenhearted. Healing includes emotional and spiritual restoration. Faith invites God’s comfort. Healing strengthens hope and resilience."},
{topic:"Healing", ref:"James 5:15", text:"And the prayer of faith shall save the sick, and the Lord shall raise him up...", exp:"Prayer and faith are instruments of divine healing. God responds to earnest supplication. Healing manifests His compassion. Faith and prayer bring restoration."},
{topic:"Healing", ref:"Exodus 15:26", text:"I am the LORD that healeth thee.", exp:"God identifies Himself as the ultimate healer. Trusting Him ensures wholeness. Healing is a sign of God’s covenant and care. Faith aligns believers with divine provision."},
{topic:"Healing", ref:"Jeremiah 30:17", text:"I will restore health unto thee, and I will heal thee of thy wounds...", exp:"God promises restoration and recovery. Healing encompasses body, mind, and spirit. Faith and patience enable transformation. His promises strengthen hope and confidence."}
/* TOPIC: Gratitude */
{topic:"Gratitude", ref:"1 Thessalonians 5:18", text:"In every thing give thanks: for this is the will of God in Christ Jesus concerning you.", exp:"Gratitude aligns hearts with God’s will. Thankfulness transforms perspective and cultivates joy. Recognizing blessings strengthens faith. Gratitude fosters humility and spiritual growth."},
{topic:"Gratitude", ref:"Psalm 107:1", text:"O give thanks unto the LORD; for he is good: for his mercy endureth for ever.", exp:"Thanking God acknowledges His goodness and mercy. Gratitude deepens worship and dependence. It reinforces trust in God’s care. Gratitude shapes attitude and behavior."},
{topic:"Gratitude", ref:"Colossians 3:15", text:"And let the peace of God rule in your hearts; to the which also ye are called in one body; and be ye thankful.", exp:"Peace and gratitude are intertwined in spiritual life. Thankfulness nurtures unity and contentment. It reflects God’s presence in relationships. Gratitude fosters harmony and joy."},
{topic:"Gratitude", ref:"Psalm 118:24", text:"This is the day which the LORD hath made; we will rejoice and be glad in it.", exp:"Every day is a gift from God to be embraced with gratitude. Rejoicing cultivates joy and perspective. Gratitude focuses attention on blessings. It strengthens resilience in adversity."},
{topic:"Gratitude", ref:"Ephesians 5:20", text:"Giving thanks always for all things unto God and the Father in the name of our Lord Jesus Christ;", exp:"Continuous gratitude honors God and acknowledges His sovereignty. Thankfulness shapes heart and mind. It encourages contentment and humility. Gratitude strengthens prayer life."},

/* TOPIC: Peace */
{topic:"Peace", ref:"John 14:27", text:"Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you.", exp:"Christ’s peace transcends worldly circumstances. Peace fosters calm and spiritual stability. Trusting Him removes fear. Peace strengthens faith in trials."},
{topic:"Peace", ref:"Philippians 4:7", text:"And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.", exp:"God’s peace guards heart and mind. It surpasses human logic or explanation. Faith and prayer access this peace. It sustains believers through challenges."},
{topic:"Peace", ref:"Romans 12:18", text:"If it be possible, as much as lieth in you, live peaceably with all men.", exp:"Peace requires intentional effort in relationships. Believers pursue harmony and reconciliation. Peace nurtures community and spiritual health. It reflects God’s love."},
{topic:"Peace", ref:"Isaiah 26:3", text:"Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.", exp:"Trust in God produces unshakable peace. Focusing on Him stabilizes thoughts and emotions. Peace results from faith and reliance on God. It sustains hope in trials."},
{topic:"Peace", ref:"Colossians 3:15", text:"And let the peace of God rule in your hearts...", exp:"God’s peace governs behavior and attitude. Believers live harmoniously when guided by His peace. Peace fosters patience and understanding. It strengthens unity in faith."},

/* TOPIC: Strength */
{topic:"Strength", ref:"Philippians 4:13", text:"I can do all things through Christ which strengtheneth me.", exp:"Christ empowers believers beyond human limits. Strength comes from dependence on God. Faith enables perseverance. Spiritual strength supports endurance and purpose."},
{topic:"Strength", ref:"Isaiah 40:29", text:"He giveth power to the faint; and to them that have no might he increaseth strength.", exp:"God supplies strength to the weary and weak. Divine power sustains spiritual and physical challenges. Relying on Him restores energy. Strength grows through trust and reliance."},
{topic:"Strength", ref:"Psalm 28:7", text:"The LORD is my strength and my shield...", exp:"God provides protection and empowerment. Strength arises from faith in His support. Confidence and courage flourish through Him. Dependence on God ensures resilience."},
{topic:"Strength", ref:"Nehemiah 8:10", text:"The joy of the LORD is your strength.", exp:"Joy from God strengthens resolve and spirit. Spiritual delight fortifies the believer. Strength flows from trusting His provision. Joy enables endurance in trials."},
{topic:"Strength", ref:"Ephesians 6:10", text:"Finally, my brethren, be strong in the Lord, and in the power of his might.", exp:"Spiritual strength derives from God’s power. Believers are called to rely on Him fully. Strength enables resistance to spiritual and worldly challenges. It fosters boldness and perseverance."},

/* TOPIC: Guidance */
{topic:"Guidance", ref:"Proverbs 3:6", text:"In all thy ways acknowledge him, and he shall direct thy paths.", exp:"God provides direction when we submit to Him. Acknowledging His presence guides decisions. Trust ensures alignment with His purpose. Guidance promotes success and spiritual growth."},
{topic:"Guidance", ref:"Psalm 32:8", text:"I will instruct thee and teach thee in the way which thou shalt go...", exp:"God personally guides believers in righteousness. Instruction clarifies choices. Trusting His teaching leads to wisdom. Guidance protects from error and harm."},
{topic:"Guidance", ref:"Isaiah 30:21", text:"This is the way, walk ye in it...", exp:"God’s voice instructs the path of obedience. Listening ensures clarity. Guidance provides confidence and assurance. Walking in His direction nurtures growth and security."},
{topic:"Guidance", ref:"James 1:5", text:"If any of you lack wisdom, let him ask of God...", exp:"Asking God for wisdom ensures right decisions. Guidance requires humility and dependence. Wisdom enables effective living. God generously provides understanding."},
{topic:"Guidance", ref:"Psalm 25:4-5", text:"Shew me thy ways, O LORD; teach me thy paths.", exp:"Seeking God’s paths directs life. Guidance aligns heart and action with His will. Dependence on God promotes spiritual growth. Trust ensures clarity and protection."}
/* TOPIC: Courage in Trials */
{topic:"Courage in Trials", ref:"1 Corinthians 16:13", text:"Watch ye, stand fast in the faith, quit you like men, be strong.", exp:"Courage is rooted in faith and steadfastness. Standing firm provides resilience in trials. Strength is reinforced through reliance on God. Courage empowers perseverance and boldness."},
{topic:"Courage in Trials", ref:"Psalm 31:24", text:"Be of good courage, and he shall strengthen your heart, all ye that hope in the LORD.", exp:"Hope in God energizes courage. Strength and confidence come from trusting Him. Courage helps face difficulties with faith. It nurtures spiritual endurance."},
{topic:"Courage in Trials", ref:"Joshua 1:9", text:"Be strong and of a good courage; be not afraid...", exp:"God commands courage in the face of fear. Strength comes from divine presence. Courage allows decisive action in adversity. Faith sustains boldness and trust."},
{topic:"Courage in Trials", ref:"Isaiah 41:10", text:"Fear thou not; for I am with thee...", exp:"God’s presence alleviates fear. Courage comes from reliance on His support. Trust ensures resilience during trials. Faith replaces anxiety with strength."},
{topic:"Courage in Trials", ref:"2 Timothy 1:7", text:"For God hath not given us the spirit of fear; but of power...", exp:"Fear is overcome by divine empowerment. Courage flows from God’s strength and clarity. Faith equips boldness and discipline. Courage enables steadfastness in challenges."},

/* TOPIC: Humility */
{topic:"Humility", ref:"Philippians 2:3", text:"Let nothing be done through strife or vainglory; but in lowliness of mind let each esteem other better than themselves.", exp:"Humility values others above self. It prevents pride and fosters unity. Humble hearts align with God’s will. Humility nurtures love, patience, and understanding."},
{topic:"Humility", ref:"James 4:10", text:"Humble yourselves in the sight of the Lord, and he shall lift you up.", exp:"God elevates those who submit humbly. Humility fosters dependence on Him. It strengthens character and spiritual growth. Submission aligns hearts with divine guidance."},
{topic:"Humility", ref:"1 Peter 5:6", text:"Humble yourselves therefore under the mighty hand of God, that he may exalt you in due time.", exp:"Patience and submission bring elevation from God. Humility teaches reliance and trust. It strengthens obedience and character. Divine timing ensures proper honor."},
{topic:"Humility", ref:"Proverbs 22:4", text:"By humility and the fear of the LORD are riches, and honour, and life.", exp:"Humility brings lasting reward beyond material gain. Reverence for God guides behavior. Humble hearts cultivate respect and spiritual growth. Humility produces lasting life impact."},
{topic:"Humility", ref:"Micah 6:8", text:"He hath shewed thee, O man, what is good; and what doth the LORD require of thee...", exp:"Humility involves justice, mercy, and walking with God. Living humbly aligns with His expectations. It fosters ethical conduct and compassion. Humility strengthens faith and purpose."},

/* TOPIC: Joy */
{topic:"Joy", ref:"Psalm 16:11", text:"Thou wilt shew me the path of life: in thy presence is fulness of joy...", exp:"God’s presence produces true joy. Joy flows from intimacy with Him. It strengthens hope and confidence. Spiritual joy transcends circumstances."},
{topic:"Joy", ref:"Nehemiah 8:10", text:"The joy of the LORD is your strength.", exp:"Divine joy provides inner strength. Joy sustains through trials. Faith in God produces resilience. Joy encourages perseverance and courage."},
{topic:"Joy", ref:"Romans 15:13", text:"Now the God of hope fill you with all joy and peace in believing...", exp:"Hope and faith cultivate joy. Spiritual joy strengthens endurance. Peace accompanies gratitude. Joy reflects trust in God’s promises."},
{topic:"Joy", ref:"Philippians 4:4", text:"Rejoice in the Lord always: and again I say, Rejoice.", exp:"Continuous rejoicing nurtures spiritual vitality. Joy comes from relationship with God. Rejoicing strengthens faith and resilience. Joy influences perspective and attitude."},
{topic:"Joy", ref:"John 15:11", text:"These things have I spoken unto you, that my joy might remain in you...", exp:"Christ’s teachings instill lasting joy. Spiritual joy sustains through challenges. Remaining in Him secures peace and contentment. Joy motivates faithful living."},

/* TOPIC: Generosity */
{topic:"Generosity", ref:"2 Corinthians 9:7", text:"Every man according as he purposeth in his heart, so let him give; not grudgingly...", exp:"Generosity flows from a willing heart. Giving reflects trust in God’s provision. It strengthens community and relationships. Generosity cultivates humility and blessing."},
{topic:"Generosity", ref:"Proverbs 11:25", text:"The liberal soul shall be made fat: and he that watereth shall be watered also himself.", exp:"Giving benefits both giver and receiver. Generosity produces spiritual and practical reward. It fosters kindness and abundance. God blesses those who share willingly."},
{topic:"Generosity", ref:"Luke 6:38", text:"Give, and it shall be given unto you...", exp:"Generosity creates reciprocity and blessings. Giving demonstrates faith in God’s provision. It encourages community and goodwill. Generous hearts reflect God’s character."},
{topic:"Generosity", ref:"Acts 20:35", text:"It is more blessed to give than to receive.", exp:"Giving enriches the soul more than receiving. Generosity strengthens character and faith. It fosters humility and love. God honors those who give selflessly."},
{topic:"Generosity", ref:"Malachi 3:10", text:"Bring ye all the tithes into the storehouse...", exp:"Faithful giving honors God and unlocks blessings. Generosity requires trust and obedience. It supports ministry and community. Giving reflects recognition of God’s provision."}
/* TOPIC: Trust */
{topic:"Trust", ref:"Proverbs 3:5", text:"Trust in the LORD with all thine heart; and lean not unto thine own understanding.", exp:"Complete trust in God directs life away from human error. Dependence on His wisdom fosters peace and confidence. Trust strengthens decision-making and perseverance. It deepens intimacy with God."},
{topic:"Trust", ref:"Psalm 37:5", text:"Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.", exp:"Committing plans to God ensures divine guidance. Trust requires surrender and patience. God’s faithfulness produces results. Trust nurtures hope and confidence in His promises."},
{topic:"Trust", ref:"Jeremiah 17:7", text:"Blessed is the man that trusteth in the LORD, and whose hope the LORD is.", exp:"Trust in God brings blessing and security. Hope complements trust, fostering resilience. God’s faithfulness sustains believers. Trust provides stability amid uncertainty."},
{topic:"Trust", ref:"Isaiah 26:3", text:"Thou wilt keep him in perfect peace, whose mind is stayed on thee...", exp:"Trusting God anchors peace of mind. Focused reliance strengthens courage and clarity. Trust maintains joy and stability. God’s guidance reassures and protects."},
{topic:"Trust", ref:"Psalm 56:3", text:"What time I am afraid, I will trust in thee.", exp:"Trust replaces fear with confidence in God. Faith provides courage during challenges. Reliance on Him fosters resilience. Trust nurtures courage and hope."},

/* TOPIC: Temptation */
{topic:"Temptation", ref:"1 Corinthians 10:13", text:"There hath no temptation taken you but such as is common to man: but God is faithful...", exp:"God allows temptations but provides a way to endure. Understanding commonality reduces shame. Reliance on His strength enables victory. Temptation tests faith and character."},
{topic:"Temptation", ref:"James 1:12", text:"Blessed is the man that endureth temptation: for when he is tried, he shall receive the crown of life.", exp:"Endurance in temptation brings reward. Trials test faith and perseverance. Victory over temptation strengthens character. God’s promise encourages steadfastness."},
{topic:"Temptation", ref:"Matthew 26:41", text:"Watch and pray, that ye enter not into temptation...", exp:"Vigilance and prayer prevent succumbing to sin. Spiritual awareness strengthens resistance. God provides guidance through vigilance. Prayer fosters reliance and protection."},
{topic:"Temptation", ref:"Hebrews 2:18", text:"For in that he himself hath suffered being tempted, he is able to succour them that are tempted.", exp:"Christ’s experience enables help in temptation. His empathy strengthens believers. Assistance comes through faith and prayer. Temptation teaches dependence on God."},
{topic:"Temptation", ref:"Galatians 5:16", text:"This I say then, Walk in the Spirit, and ye shall not fulfil the lust of the flesh.", exp:"Spiritual focus prevents yielding to sinful desires. Walking in the Spirit guides choices. Dependence on God strengthens self-control. Faith produces victory over temptation."},

/* TOPIC: Spiritual Growth */
{topic:"Spiritual Growth", ref:"2 Peter 3:18", text:"But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ.", exp:"Growth in grace develops character and wisdom. Knowledge of Christ strengthens faith. Spiritual maturity results from continuous learning and obedience. Growth enhances life impact."},
{topic:"Spiritual Growth", ref:"Colossians 1:10", text:"That ye might walk worthy of the Lord unto all pleasing...", exp:"Spiritual growth aligns life with God’s will. Worthy conduct reflects maturity and devotion. Growth fosters integrity and influence. Obedience deepens relationship with God."},
{topic:"Spiritual Growth", ref:"Ephesians 4:15", text:"Speaking the truth in love, may grow up into him in all things...", exp:"Growth requires truth and love in communication. Spiritual maturity develops through Christ. Growth strengthens community and faith. Love guides development."},
{topic:"Spiritual Growth", ref:"Philippians 1:6", text:"Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ:", exp:"God completes the work He starts in believers. Growth is a continuous process of refinement. Confidence sustains perseverance. Spiritual development is guided by His hand."},
{topic:"Spiritual Growth", ref:"Hebrews 5:14", text:"But strong meat belongeth to them that are of full age...", exp:"Mature believers discern and apply deeper spiritual truths. Growth requires practice and experience. Spiritual strength results from learning and obedience. Growth enables stability and leadership."},

/* TOPIC: Faithfulness */
{topic:"Faithfulness", ref:"Lamentations 3:22-23", text:"It is of the LORD's mercies that we are not consumed...", exp:"God’s faithfulness sustains life and hope. His mercy renews each day. Believers rely on God’s unchanging nature. Faithfulness inspires trust and devotion."},
{topic:"Faithfulness", ref:"1 Corinthians 1:9", text:"God is faithful, by whom ye were called unto the fellowship of his Son Jesus Christ our Lord.", exp:"Faithfulness is rooted in God’s calling. Trust in Him assures guidance and support. Faithfulness strengthens relationships with God. God’s dependability fosters hope and commitment."},
{topic:"Faithfulness", ref:"Galatians 5:22", text:"But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith,", exp:"Faithfulness is part of the Spirit’s fruit. Consistency in character reflects God’s influence. Spiritual fruit strengthens witness and relationships. Faithfulness demonstrates commitment to God."},
{topic:"Faithfulness", ref:"Proverbs 3:3", text:"Let not mercy and truth forsake thee: bind them about thy neck...", exp:"Faithfulness requires mercy and truth. It strengthens character and reliability. Faithful conduct nurtures trust and respect. It reflects God’s principles."},
{topic:"Faithfulness", ref:"Revelation 2:10", text:"Be thou faithful unto death, and I will give thee a crown of life.", exp:"Enduring faithfulness brings eternal reward. Commitment to God surpasses trials. Faithfulness sustains hope and perseverance. God honors steadfast devotion."}
/* TOPIC: Prayer */
{topic:"Prayer", ref:"Philippians 4:6", text:"Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.", exp:"Prayer is the channel for expressing needs and gratitude to God. It reduces anxiety and strengthens trust. Persistent prayer fosters intimacy with God. Prayer aligns hearts with His will."},
{topic:"Prayer", ref:"1 Thessalonians 5:17", text:"Pray without ceasing.", exp:"Continuous prayer maintains connection with God. Persistent communication builds spiritual awareness. Prayer strengthens faith and dependence. It nurtures endurance and guidance."},
{topic:"Prayer", ref:"Matthew 6:6", text:"But thou, when thou prayest, enter into thy closet, and when thou hast shut thy door, pray to thy Father...", exp:"Private prayer deepens personal intimacy with God. Solitude enhances focus and sincerity. Prayer fosters reflection and alignment with God’s will. It strengthens spiritual life."},
{topic:"Prayer", ref:"James 5:16", text:"The effectual fervent prayer of a righteous man availeth much.", exp:"Faithful and passionate prayer brings results. Prayer influences situations and hearts. Righteousness enhances effectiveness. Persistent prayer impacts both personal and communal life."},
{topic:"Prayer", ref:"Mark 11:24", text:"Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive them...", exp:"Faith amplifies prayer’s power. Belief ensures alignment with God’s promises. Prayer is both a spiritual practice and expression of trust. God responds to heartfelt requests."},

/* TOPIC: Love */
{topic:"Love", ref:"1 Corinthians 13:4-7", text:"Charity suffereth long, and is kind; charity envieth not...", exp:"Love is patient, kind, and enduring. True love prioritizes others and persists through challenges. It reflects God’s nature. Love strengthens relationships and nurtures spiritual growth."},
{topic:"Love", ref:"John 15:12", text:"This is my commandment, That ye love one another, as I have loved you.", exp:"Christ commands love based on His example. Love is active and selfless. It builds unity and trust. Following His command fosters spiritual maturity."},
{topic:"Love", ref:"Romans 13:10", text:"Love worketh no ill to his neighbour: therefore love is the fulfilling of the law.", exp:"Love prevents harm and injustice. It fulfills God’s commandments. Love is practical in action and attitude. True love guides ethical conduct."},
{topic:"Love", ref:"1 John 4:8", text:"He that loveth not knoweth not God; for God is love.", exp:"Knowing God requires practicing love. Love defines spiritual understanding. It reflects divine character. Love is foundational to faith and relationship with God."},
{topic:"Love", ref:"Ephesians 5:2", text:"And walk in love, as Christ also hath loved us...", exp:"Walking in love mirrors Christ’s sacrifice. Love guides actions and decisions. It nurtures unity, forgiveness, and compassion. Love is central to Christian life."},

/* TOPIC: Hope */
{topic:"Hope", ref:"Romans 15:13", text:"Now the God of hope fill you with all joy and peace in believing...", exp:"God provides hope that strengthens joy and peace. Faith sustains hope during trials. Hope motivates perseverance and trust. It anchors life in God’s promises."},
{topic:"Hope", ref:"Jeremiah 29:11", text:"For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil...", exp:"God’s plans inspire hope and assurance. Trusting His purpose fosters confidence and peace. Hope guides decision-making and perseverance. God’s intentions ensure a positive future."},
{topic:"Hope", ref:"Hebrews 6:19", text:"Which hope we have as an anchor of the soul, both sure and stedfast...", exp:"Hope anchors believers in stability and faith. It prevents drifting in adversity. Spiritual hope strengthens patience and endurance. Anchored hope nurtures courage and resilience."},
{topic:"Hope", ref:"Psalm 33:18", text:"Behold, the eye of the LORD is upon them that fear him, upon them that hope in his mercy.", exp:"God watches over those who trust Him. Hope focuses attention on His mercy and care. It strengthens trust and spiritual focus. Hope fosters reliance and confidence in God."},
{topic:"Hope", ref:"Lamentations 3:24", text:"The LORD is my portion, saith my soul; therefore will I hope in him.", exp:"Hope is rooted in God as our portion. Trust in Him sustains the soul. Spiritual hope produces patience and peace. Reliance on God strengthens faith and purpose."}
/* TOPIC: Salvation */
{topic:"Salvation", ref:"Ephesians 2:8", text:"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:", exp:"Salvation is a gift from God, not earned by works. Faith opens the heart to receive His grace. Recognizing this fosters humility and gratitude. Salvation restores spiritual life and relationship with God."},
{topic:"Salvation", ref:"Romans 10:9", text:"That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.", exp:"Confession and heartfelt belief secure salvation. Faith in Christ’s resurrection affirms God’s power. Salvation transforms life and eternal destiny. It emphasizes personal commitment and trust."},
{topic:"Salvation", ref:"Acts 4:12", text:"Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.", exp:"Salvation is exclusively through Jesus Christ. Trusting in Him is essential for redemption. God’s plan provides the only path to eternal life. Recognition of Christ’s unique role fosters faith and dependence."},
{topic:"Salvation", ref:"John 3:16", text:"For God so loved the world, that he gave his only begotten Son...", exp:"God’s love motivates the gift of His Son. Belief in Him ensures eternal life. Salvation is an expression of divine love and mercy. Faith in Christ secures hope and reconciliation with God."},
{topic:"Salvation", ref:"Titus 3:5", text:"Not by works of righteousness which we have done, but according to his mercy he saved us...", exp:"Salvation comes from God’s mercy, not human effort. Reliance on His grace emphasizes humility. Faithful reception of God’s mercy restores spiritual life. Salvation is divine initiative, not personal achievement."},

/* TOPIC: Holiness */
{topic:"Holiness", ref:"1 Peter 1:16", text:"Because it is written, Be ye holy; for I am holy.", exp:"Holiness reflects God’s character. Believers are called to live distinct and pure lives. Pursuing holiness cultivates moral integrity. It strengthens spiritual maturity and witness."},
{topic:"Holiness", ref:"Hebrews 12:14", text:"Follow peace with all men, and holiness, without which no man shall see the Lord:", exp:"Holiness is essential to seeing God. It accompanies peace and integrity. Pursuit of holiness enhances faith and relationship with God. It demands discipline and obedience."},
{topic:"Holiness", ref:"Romans 12:1", text:"Present your bodies a living sacrifice, holy, acceptable unto God...", exp:"Holiness involves surrendering life to God. Living sacrificially aligns with His will. Spiritual discipline fosters moral and ethical growth. Holiness strengthens devotion and witness."},
{topic:"Holiness", ref:"2 Corinthians 7:1", text:"Having therefore these promises, dearly beloved, let us cleanse ourselves from all filthiness of the flesh...", exp:"Holiness requires active cleansing from sin. Promises of God motivate righteous living. Spiritual purity nurtures faith and trust. Holiness impacts behavior and character."},
{topic:"Holiness", ref:"Leviticus 11:44", text:"For I am the LORD your God: ye shall therefore sanctify yourselves...", exp:"Sanctification sets believers apart. Holiness honors God and aligns with His commands. It strengthens spiritual identity. Pursuit of holiness fosters obedience and reverence."},

/* TOPIC: Deliverance */
{topic:"Deliverance", ref:"Psalm 34:17", text:"The righteous cry, and the LORD heareth, and delivereth them out of all their troubles.", exp:"God delivers those who call on Him. Deliverance restores safety and peace. Faith invites His intervention. Trusting God ensures rescue from difficulties."},
{topic:"Deliverance", ref:"2 Samuel 22:2", text:"The LORD is my rock, and my fortress, and my deliverer;", exp:"God provides protection and strength. Deliverance is both spiritual and practical. Reliance on Him strengthens courage. He rescues the faithful from danger and adversity."},
{topic:"Deliverance", ref:"Psalm 91:14", text:"Because he hath set his love upon me, therefore will I deliver him...", exp:"God’s deliverance responds to love and devotion. Faith secures His protection. Deliverance provides assurance and hope. Trusting God ensures safety in trials."},
{topic:"Deliverance", ref:"Colossians 1:13", text:"Who hath delivered us from the power of darkness, and hath translated us into the kingdom of his dear Son:", exp:"Spiritual deliverance brings freedom from sin and evil. God’s power rescues believers. Faith results in transition from darkness to light. Deliverance restores life and purpose."},
{topic:"Deliverance", ref:"Psalm 50:15", text:"And call upon me in the day of trouble: I will deliver thee...", exp:"Calling on God brings timely deliverance. Faith and prayer unlock His protection. Deliverance strengthens hope and resilience. God responds to dependence and devotion."},

/* TOPIC: Endurance */
{topic:"Endurance", ref:"Hebrews 12:1", text:"Let us run with patience the race that is set before us,", exp:"Endurance sustains spiritual progress. Patience in life’s challenges ensures completion of God’s plan. Discipline and focus cultivate perseverance. Endurance strengthens character and faith."},
{topic:"Endurance", ref:"James 1:12", text:"Blessed is the man that endureth temptation...", exp:"Enduring trials brings blessing. Patience and faith reinforce resilience. Endurance strengthens spiritual maturity. Rewards await those who persevere."},
{topic:"Endurance", ref:"Romans 5:3-4", text:"And not only so, but we glory in tribulations also: knowing that tribulation worketh patience;", exp:"Trials produce perseverance and character. Endurance develops hope and strength. Faith transforms difficulties into growth. Endurance nurtures spiritual depth."},
{topic:"Endurance", ref:"2 Timothy 4:7", text:"I have fought a good fight, I have finished my course, I have kept the faith.", exp:"Endurance requires sustained effort and faithfulness. Completion brings fulfillment and reward. Spiritual persistence models integrity. Endurance reflects devotion and discipline."},
{topic:"Endurance", ref:"Galatians 6:9", text:"And let us not be weary in well doing: for in due season we shall reap...", exp:"Perseverance ensures ultimate reward. Consistency in good deeds requires endurance. Faith strengthens commitment. Endurance fosters trust in God’s timing."}];
