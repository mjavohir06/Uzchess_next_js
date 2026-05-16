"use client"

const TelInput = ({ tel, setTel }: { tel: string, setTel: (promp: string) => void }) => {

    function formatPhone(value: string): string {

        const digits = value.replace(/\D/g, "");

        const trimmed = digits.slice(0, 9);

        const parts: string[] = [];

        if (trimmed.length > 0) {
            parts.push(trimmed.slice(0, 2));
        }
        if (trimmed.length >= 3) {
            parts.push(trimmed.slice(2, 5));
        }
        if (trimmed.length >= 6) {
            parts.push(trimmed.slice(5, 7));
        }
        if (trimmed.length >= 8) {
            parts.push(trimmed.slice(7, 9));
        }

        return parts.join(" ");
    }

    function antiformat(value:string):string {
        
        return value.replaceAll(" ","").slice(0,9)
        
    }

    return (
        <div className="telinput">
            <div>
                <p>+998</p>
            </div>
            <div>
                <input type="text" value={formatPhone(tel)} onChange={e => setTel(antiformat(e.target.value))} placeholder="_ _  _ _ _  _ _  _ _" />
            </div>
        </div>
    )
}

export default TelInput
