import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";
import Title from "./Title";

const TestimonialSection = () => {
    return (
        <div className="flex flex-col items-center px-6 md:px-16 lg-px-24 bg-slate-50 pt-20 pb-30">
            <Title
                title="What Our Guests Say"
                subTitle="Discover why discerning travelers choose QuickStay for their luxury accommodations around the world."
            />
            <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="text-sm w-90 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden"
                    >
                        <div className="flex items-center gap-4 px-5 py-4 ">
                            <img
                                className="h-12 w-12 rounded-full"
                                src={testimonial.image}
                                alt="userImage1"
                            />
                            <div>
                                <h1 className="text-lg font-medium text-gray-800">
                                    {testimonial.name}
                                </h1>
                                <p className="text-sm text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="p-5 pb-7">
                            <div className="flex gap-0.5">
                                <StarRating rating={testimonial.rating} />
                            </div>
                            <p className="text-gray-500 mt-5">{testimonial.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialSection;
