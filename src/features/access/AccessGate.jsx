const ACCESS_CODE = 'FLOREXUM';

function AccessGate({onUnlock}) {
    function handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);
        const code = formData.get('code').trim().toUpperCase();

        if (code === ACCESS_CODE) {
            onUnlock();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="access-code"> ¿Tenés una flor de viento? </label>
            <input id="access-code" name="code" type="text" autocomplete="off" />
            <button type="submit"> Desbloquear </button>
        </form>
    );
}

export default AccessGate;