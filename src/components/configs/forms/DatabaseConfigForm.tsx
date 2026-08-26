import {
    Field,
    FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { useWizardStore } from "@/store/wizard.store";

export function DatabaseConfigForm() {
    const { database } = useWizardStore();

    return (
        <div className="space-y-5">
            <Field>
                <FieldLabel htmlFor="database-name">
                    Database name
                </FieldLabel>

                <Input
                    id="database-name"
                    value={database.name}
                    readOnly
                />

            
            </Field>

            <Field>
                <FieldLabel htmlFor="database-port">
                    Port
                </FieldLabel>

                <Input
                    id="database-port"
                    value={database.port}
                    readOnly
                />

            </Field>

            <Field>
                <FieldLabel htmlFor="database-username">
                    Username
                </FieldLabel>

                <Input
                    id="database-username"
                    value={database.username}
                    readOnly
                />
            </Field>
        </div>
    );
}