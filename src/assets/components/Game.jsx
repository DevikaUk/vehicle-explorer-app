import React from "react";
import { Link } from "react-router-dom";

const QUESTIONS = [
  { id: 1, prompt: "Which type is a CAR?", answer: "Land" },
  { id: 2, prompt: "Which type is a HELICOPTER?", answer: "Air" },
  { id: 3, prompt: "Which type is a SHIP?", answer: "Water" },
  { id: 4, prompt: "Which type is a TRAIN?", answer: "Land" },
  { id: 5, prompt: "Which type is a SUBMARINE?", answer: "Water" },
];

export default class VehicleGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      choice: "",
      result: null, // { ok: boolean, message: string }
      score: 0,
    };
    this.timer = null;
  }

  componentWillUnmount() {
    if (this.timer) clearTimeout(this.timer);
  }

  handleChoiceChange = (e) => {
    this.setState({ choice: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { index, choice, score } = this.state;
    const q = QUESTIONS[index];

    // if nothing selected
    if (!choice) {
      this.setState({ result: { ok: false, message: "Please select one option." } });
      return;
    }

    const ok = choice === q.answer;

    if (ok) {
      // ✅ Right action
      this.setState({
        score: score + 1,
        result: { ok: true, message: "Correct! 🎉 Great job!" },
      });

      this.timer = setTimeout(() => {
        this.setState({
          result: null,
          choice: "",
          index: (index + 1) % QUESTIONS.length,
        });
      }, 900);
    } else {
      // ❌ Wrong action
      this.setState({
        result: { ok: false, message: "Oops! Try again 🙂" },
        choice: "",
      });

      this.timer = setTimeout(() => {
        this.setState({ result: null });
      }, 900);
    }
  };

  skipQuestion = () => {
    this.setState((prev) => ({
      result: null,
      choice: "",
      index: (prev.index + 1) % QUESTIONS.length,
    }));
  };

  render() {
    const { index, choice, result, score } = this.state;
    const q = QUESTIONS[index];

    return (
      <div className="min-h-screen w-full bg-[#fbe5d5] flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6 space-y-5">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="px-4 py-2 rounded-full bg-[#a8cad8] text-white font-medium hover:opacity-90 transition"
            >
              Home
            </Link>

            <div className="text-sm font-semibold text-gray-700">
              Score: <span className="text-gray-900">{score}</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 text-center">
            Vehicle Sorting Game
          </h2>

          <div className="rounded-xl bg-[#fbe5d5] p-4 text-center">
            <p className="text-lg font-medium text-gray-800">{q.prompt}</p>
            <p className="text-sm text-gray-600 mt-1">
              Choose one: Land / Air / Water
            </p>
          </div>

          {/* RESULT (right/wrong actions shown) */}
          {result && (
            <div
              className={`p-3 rounded-xl text-center font-medium ${
                result.ok
                  ? "bg-[#92d2b1] text-gray-900"
                  : "bg-[#f6b5b5] text-gray-900"
              }`}
            >
              {result.message}
            </div>
          )}

          {/* FORM */}
          <form onSubmit={this.handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["Land", "Air", "Water"].map((opt) => (
                <label
                  key={opt}
                  className={`cursor-pointer border rounded-xl p-3 flex items-center justify-center gap-2 transition ${
                    choice === opt ? "border-gray-900 bg-slate-50" : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="vehicleType"
                    value={opt}
                    checked={choice === opt}
                    onChange={this.handleChoiceChange}
                    className="accent-blue-500"
                  />
                  <span className="font-medium text-gray-800">{opt}</span>
                </label>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl bg-[#8e96c7] text-white font-semibold hover:opacity-90 transition"
              >
                Check Answer
              </button>

              <button
                type="button"
                onClick={this.skipQuestion}
                className="flex-1 py-3 rounded-xl bg-[#a8cad8] text-white font-semibold hover:opacity-90 transition"
              >
                Skip
              </button>
            </div>
          </form>

          <p className="text-xs text-gray-500 text-center">
            Tip: If the answer is correct, it moves to the next question automatically.
          </p>
        </div>
      </div>
    );
  }
}
