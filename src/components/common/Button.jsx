import React from "react";

const  nButton extends Component {
  render() {
    const { text, onClick } = this.props;

    return (
      <button
        onClick={onClick}
        className="
          w-[170px]
          h-[48px]
          bg-orange-500
          text-white
          text-lg
          font-semibold
          rounded-full
          flex
          items-center
          justify-center
          cursor-pointer
          hover:bg-orange-600
          active:scale-95
          transition
          duration-300
        "
      >
        {text}
      </button>
    );
  }
}

export default Button;
