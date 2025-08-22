import { useState } from "react";

export default function Accordion() {
    const data = [
        {
            title: "HTML",
            content:
                "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
        },
        {
            title: "CSS",
            content:
                "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
        },
        {
            title: "JavaScript",
            content:
                "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
        },
    ];

    const [open, setOpen] = useState({});

    return (
        <div>
            {data.map((it, i) => {
                const expanded = !!open[i];
                const toggle = () => setOpen((s) => ({ ...s, [i]: !s[i] }));

                return (
                    <div key={i} className="accordion-item">
                        <div className="accordion-header">
                            <button
                                type="button"
                                className="accordion-trigger"
                                aria-expanded={expanded}
                                aria-controls={`panel-${i}`}
                                id={`btn-${i}`}
                                onClick={toggle}
                            >
                                {it.title}{" "}
                                <span
                                    aria-hidden={true}
                                    className={`accordion-icon ${expanded ? "rotated" : ""}`}
                                />
                            </button>
                        </div>
                        <div
                            id={`panel-${i}`}
                            className="accordion-panel"
                            role="region"
                            aria-labelledby={`btn-${i}`}
                            hidden={!expanded}
                        >
                            <div className="accordion-panel-inner">{it.content}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
