export default function SkipLink() {
    return (
        <a
            href="#contenido"
            className="skip-link"
            onClick={(event) => {
                event.preventDefault();
                const target = document.getElementById('contenido');
                target?.focus();
                target?.scrollIntoView();
            }}
        >
            Saltar al contenido
        </a>
    );
}
