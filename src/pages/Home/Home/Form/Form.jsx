import formimg from "../../../../assets/woman-with-salad-phone.jpg";
import SectionTitle from "../../../../components/SectionTitle";

const Form = () => {
  return (
    <section>
      <br />
      <br />
      <br />
      <SectionTitle subHeading="MASSAGE" heading="Clint Massage"></SectionTitle>
      <div className="hero min-h-screen bg-gray-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  placeholder="phone number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Massage</span>
                </label>
                <input
                  type="massage"
                  placeholder="massage"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary  ">Submit</button>
              </div>
            </form>
          </div>
          <div className="text-center lg:text-left py-3">
            <img
              src={formimg}
              alt=""
              style={{ width: "800px", height: "530px" }}
              className="mt-10"
            />
            <h1 className="text-5xl font-bold"></h1>
            <p className="py-6"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
