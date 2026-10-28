import { Sparkles, Terminal, ExternalLink } from "lucide-react";
import { invoke } from "@tauri-apps/api/core";
import { SettingRow } from "./SettingRow";

interface AiTabProps {
	geminiQuickPrompt: boolean;
	toggleGeminiQuickPrompt: () => void;
	antigravityLauncher: boolean;
	toggleAntigravityLauncher: () => void;
}

export function AiTab({
	geminiQuickPrompt,
	toggleGeminiQuickPrompt,
	antigravityLauncher,
	toggleAntigravityLauncher
}: AiTabProps) {
	return (
		<>
			<div className="setting-group-label">Gemini</div>
			<div className="setting-group">
				<SettingRow
					icon={Sparkles}
					label="Gemini Button in der Notch"
					desc="1-Klick Schnellstart für deine Gemini App"
				>
					<label className="toggle-switch">
						<input
							type="checkbox"
							checked={geminiQuickPrompt}
							onChange={toggleGeminiQuickPrompt}
						/>
						<span className="slider"></span>
					</label>
				</SettingRow>

				<SettingRow
					icon={ExternalLink}
					label="Gemini App jetzt starten"
					desc="Öffnet die installierte Gemini Windows-App"
					action
					divider={false}
					onClick={() => invoke("open_app", { appName: "gemini-app" }).catch(console.error)}
				/>
			</div>

			<div className="setting-group-label">Antigravity</div>
			<div className="setting-group">
				<SettingRow
					icon={Terminal}
					label="Antigravity Button in der Notch"
					desc="1-Klick Schnellstart für die Antigravity Desktop-App"
				>
					<label className="toggle-switch">
						<input
							type="checkbox"
							checked={antigravityLauncher}
							onChange={toggleAntigravityLauncher}
						/>
						<span className="slider"></span>
					</label>
				</SettingRow>

				<SettingRow
					icon={ExternalLink}
					label="Antigravity jetzt starten"
					desc="Öffnet die installierte Antigravity IDE / App"
					action
					divider={false}
					onClick={() => invoke("open_app", { appName: "antigravity-app" }).catch(console.error)}
				/>
			</div>
		</>
	);
}
