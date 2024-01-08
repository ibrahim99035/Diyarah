import React, { useEffect, useRef } from 'react';
import './CompanyIntro.css'; // Import your CSS file

import DiyarahLogo from './logo.png'

import Building1  from './Buildingds/Building1.webp'
import Building2  from './Buildingds/Building2.webp'
import Building3  from './Buildingds/Building3.webp'
import Building4  from './Buildingds/Building5.webp'



const CompanyIntro = () => {

  const professionalIntroRef = useRef(null);

  useEffect(() => {
    const handleAnimation = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    };

    const introObserver = new IntersectionObserver(handleAnimation, {
      threshold: 0.5,
    });

    if (professionalIntroRef.current) {
      introObserver.observe(professionalIntroRef.current);
    }

    return () => {
      if (professionalIntroRef.current) {
        introObserver.unobserve(professionalIntroRef.current);
      }
    };
  }, []);

  return (
    <div className="professional-intro-container">
        <h1>من نحن و ما هي قيمنا</h1>
      <div className="professional-intro-section">
        <div id='alogoDiv'>
            <img src={DiyarahLogo} alt="Logo" className="alogo" loading="lazy" />
        </div>
        <p id='heroP'>
        تقدم شركة ديارة العقارية تجربة استثنائية في عالم العقارات، حيث يتميز عملنا بالاحترافية واحترام الخصوصية. نحن نفخر بتقديم خدمات عقارية شاملة تشمل البيع والشراء وإدارة العقارات. يتميز فريقنا بالتفرد في التعامل مع كل عميل، مع التركيز الكامل على تلبية احتياجاتهم الفريدة. نحن نلتزم بحماية خصوصية عملائنا وضمان أمان معلوماتهم. تقنياتنا المتقدمة والابتكار تضمن لعملائنا تجربة متميزة وفعّالة. بفهم عميق لسوق العقارات واستخدام التكنولوجيا، نسعى دائمًا لتحقيق أعلى قيمة لعملائنا. اكتشف الفرق مع ديارة العقارية، حيث نسهم في بناء مستقبلك بكفاءة واستدامة.
        </p>
      </div>
      {/* Section 1 */}
      <div className="professional-intro-section">
        <div className="professional-intro-text">
          <h2>احترافية في التعامل</h2>
          <p>
            بفخر واعتزاز يعكس روح الاحتراف والتميز، تتجلى أهمية العمل بديارة العقارية. نحن هنا لنقدم لكم تجربة تعامل استثنائية تتسم بالرقي والدقة في كل جانب من جوانب خدماتنا.

            يتميز فريقنا المتخصص والمحترف بتقديم خدمات عالية الجودة، حيث يضع كل فرد منهم خبراته ومهاراته في خدمة تحقيق تطلعات العملاء. نحن نفهم أن الثقة التي يضعها العملاء فينا تتطلب رعاية خاصة، ولذلك نسعى دائماً لتلبية تلك التوقعات بكفاءة وأمانة.

            نهتم بكل تفصيل من تفاصيل خدماتنا، سعياً منا لضمان رضاكم التام وتحقيق توقعاتكم بشكل فعّال. إننا نعمل بروح الفريق الواحد، متحدين لتقديم أفضل الحلول والمشاريع العقارية التي تلبي تطلعاتكم وتتجاوز توقعاتكم.

            في ديارة العقارية، نعتبر الاحترافية ليست مجرد سمة، بل هي أسلوب حياة نتبناه لتقديم أفضل خدمة ممكنة. تواصلوا معنا اليوم لتجربة فريدة في عالم العقارات، حيث الجودة والالتزام هما سمتنا الأساسية.
          </p>
        </div>
        <img
          src= {Building1}
          alt="Professional Image 1"
          className="animated-image"
          id='Building1'
          loading="lazy"
        />
      </div>

      {/* Section 2 */}
      <div className="professional-intro-section reverse">
        <img
          src={Building2}
          alt="Professional Image 2"
          className="animated-image"
          id='Building2'
          loading="lazy"
        />
        <div className="professional-intro-text">
          <h2>احترام الخصوصية</h2>
          <p>
            نعتبر حفاظنا على خصوصية عملائنا أمرًا لا يُساوم عليه. تُعَدُّ سياستنا الراسخة في احترام الخصوصية وتأمين المعلومات من بين أبرز أولوياتنا، حيث نسعى جاهدين لضمان توفير تجربة آمنة وقائمة على الثقة.

            يُمثِّل احترام خصوصية عملائنا جزءًا أساسيًا من رؤيتنا، حيث نعمل بتفانٍ لحماية كل تفصيلة من تفاصيل المعلومات التي تُعَدُّ ثقةً قائمة بيننا وبينكم. إننا نعتبر حقوق الخصوصية حقوقًا لا يمكن المساس بها، ونسعى دائمًا لتطوير وتحسين سياساتنا وإجراءاتنا لضمان استمرارية الحماية والأمان.

            تجسّد جهودنا المتواصلة في مجال حماية الخصوصية التزامًا راسخًا بتوفير بيئة آمنة وموثوقة لكل عميل. يُشكّل الحفاظ على خصوصية معلوماتكم جزءًا لا يتجزأ من مهمتنا، ونضعها في صلب كل خطوة نقوم بها لضمان راحتكم وسلامة معلوماتكم.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="professional-intro-section">
        <div className="professional-intro-text">
          <h2>تميز فريد في مجال العقارات</h2>
          <p>
            نحن نتسم بالتميز اللافت في تقديم خدماتنا العقارية. ما يميزنا هو الاهتمام الفائق بتلبية احتياجات كل عميل بشكل فريد، حيث نقدم حلاً فريدًا يتناسب مع متطلباته الخاصة، مما يضفي على تجربته معنا طابعًا استثنائيًا ومميزًا.

            نحن نؤمن بأن كل عميل يمتلك احتياجات ورغبات فريدة، ولذلك فإننا نخصص الوقت اللازم لفهم تلك الاحتياجات بدقة. يقدم فريقنا المختص حلاً مخصصًا لكل عميل، مع التركيز على توفير تجربة شخصية تتجاوز التوقعات.

            نحن نعتبر التميز ليس مجرد هدف، بل هو أسلوب حياة نتبعه في كل مرحلة من مراحل خدماتنا العقارية. إن الاهتمام بأدق التفاصيل وتقديم حلاً فريدًا يميزنا ويجعل عملاؤنا يشعرون بالاطمئنان والفخر بتجربتهم الاستثنائية معنا.
          </p>
        </div>
        <img
          src={Building3}
          alt="Professional Image 3"
          className="animated-image"
          id='Building3'
          loading="lazy"
        />
      </div>

      {/* Section 4 */}
      <div className="professional-intro-section reverse">
        <img
          src={Building4}
          alt="Professional Image 4"
          className="animated-image"
          id='Building4'
          loading="lazy"
        />
        <div className="professional-intro-text">
          <h2>تقنيات متقدمة وابتكار</h2>
          <p>
            في مجال العقارات، نضع نصب أعيننا التقنيات الحديثة وروح الابتكار لتقديم خدمات متميزة. نعتمد على أحدث التطورات التكنولوجية والابتكارات لتحقيق حلول متطورة وفعّالة تلبي توقعات واحتياجات عملائنا، مما يعزز مكانتنا كشركة رائدة في السوق.

            نحن ندرك أهمية التكنولوجيا في تحسين تجارب العملاء وتسهيل العمليات. لذلك، نجمع بين استخدام أحدث الأدوات التكنولوجية والابتكار في كل جانب من جوانب خدماتنا. يسهم تكامل التقنيات المتقدمة في تسهيل العمليات وتحسين كفاءة تقديم الخدمات، مما يمنح عملائنا تجربة فريدة ومتميزة.

            باعتبارنا روادًا في مجالنا، نلتزم بالبحث المستمر عن أحدث التقنيات والابتكارات لضمان استمرارية تقديم خدمات عالية الجودة وتميزنا كشركة تتبنى التقدم التكنولوجي.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyIntro;
