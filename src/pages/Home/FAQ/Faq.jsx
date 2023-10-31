import SectionTitle from "../../../components/SectionTitle";
const Faq = () => {
  return (
    <section className="py-5">
      <br />
      <br />
      <br />
      <SectionTitle
        heading="Frequently Asked Any Questions ??"
        subHeading="Check In"
      ></SectionTitle>

      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200 "
        >
          <div className="collapse-title  font-medium">
            Q: What are food additives?
          </div>
          <div className="collapse-content">
            <p>
              A food ingredient is any substance that is added to a food to
              achieve a desired effect. Direct food additives are used in foods
              to impart specific technological or functional qualities. For
              example, stabilizers are used to help prevent separation of
              nutrients in milk products, while phosphates are used as a
              leavening agent in baked goods. Indirect additives are not
              intentionally added to food, but may be present in trace amounts
              as a result of processing, packaging, shipping or storage. Both
              direct and indirect food additives are controlled by national
              regulatory authorities, such as the U.S. Food and Drug
              Administration. Any food ingredient must be proven safe to be used
              in foods.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200 "
        >
          <div className="collapse-title font-medium">
            Q: Why are food additives added to foods?
          </div>
          <div className="collapse-content">
            <p>
              Food additives are added to foods for several reasons:
              <li>To provide or maintain nutritional benefits.</li>
              <li>To maintain product quality and freshness</li>
              <li>To prevent spoilage during transport, storage and sale.</li>
            </p>
          </div>
        </div>
      </div>
      <div className="pt-2">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200 "
        >
          <div className="collapse-title  font-medium">
            Q: Are food additives harmful to my health?
          </div>
          <div className="collapse-content">
            <p>
              Food safety is and always will be the primary objective for food
              ingredient manufacturers. Before food additives can be added to
              foods, they must be reviewed and deemed safe for their intended
              use by either the Food and Drug Administration or a panel of
              experts.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="pt-2">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200 "
        >
          <div className="collapse-title  font-medium">
            Q: How are food additives determined safe?
          </div>
          <div className="collapse-content">
            <p>
              Under current U.S. law, a food additive may be deemed safe for use
              in food in one of two ways. First, it may be declared “Generally
              Recognized As Safe,” for its intended use based on a review by
              qualified experts of the publicly available scientific data on the
              substance. FDA’s Generally Recognized as Safe (GRAS) Program is
              transparent, requiring information considered by the GRAS review
              panel to be publicly available. This process is rigorous; science
              based, and has a proven track-record of success and safety.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-2">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200 "
        >
          <div className="collapse-title  font-medium">
            Q: Are food colors safe for children?
          </div>
          <div className="collapse-content">
            <p>
              Yes. While a single study in Europe claimed to have found a link
              between food colors and hyperactivity, the results of the study
              have been widely criticized by regulatory bodies around the world.
              The U.S. Food and Drug Administration and European Food Safety
              Authority both reviewed the study and found that the research did
              not prove that food colors were the cause of the behavioral
              effects observed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
