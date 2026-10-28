import { Sparkles, Terminal, Bot, Layers, ExternalLink } from "lucide-react";
import { openUrl } from "@tauri-apps/plugin-opener";
import { SettingRow } from "./SettingRow";

interface AiTabProps {
	geminiQuickPrompt: boolean;
	toggleGeminiQuickPrompt: () => void;
	geminiDockApp: boolean;
	toggleGeminiDockApp: () => void;
	antigravityLauncher: boolean;
	toggleAntigravityLauncher: () => void;
	aiShelf: boolean;
	toggleAiShelf: () => void;
}

export function AiTab({
	geminiQuickPrompt,
	toggleGeminiQuickPrompt,
	geminiDockApp,
	toggleGeminiDockApp,
	antigravityLauncher,
	toggleAntigravityLauncher,
	aiShelf,
	toggleAiShelf
}: AiTabProps) {
	return (
		<>
			<div className="setting-group-label">Gemini KI-Integration</div>
			<div className="setting-group">
				<SettingRow
					icon={Sparkles}
					label="Gemini Schnell-Prompt"
					desc="Schnellzugriff & Prompt-Eingabe direkt aus der Notch"
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
					icon={Bot}
					label="Gemini Web-App im Dock"
					desc="Eigenständiges rahmenloses App-Fenster für Gemini"
				>
					<label className="toggle-switch">
						<input
							type="checkbox"
							checked={geminiDockApp}
							onChange={toggleGeminiDockApp}
						/>
						<span className="slider"></span>
					</label>
				</SettingRow>

				<SettingRow
					icon={ExternalLink}
					label="Gemini öffnen"
					desc="Gemini Web-Interface im Browser starten"
					action
					divider={false}
					onClick={() => openUrl("https://gemini.google.com")}
				/>
			</div>

			<div className="setting-group-label">Entwickler & Antigravity</div>
			<div className="setting-group">
				<SettingRow
					icon={Terminal}
					label="Antigravity Schnellstart"
					desc="1-Klick Workspace & Terminal-Launcher in der Notch"
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
					icon={Layers}
					label="Smarte KI-Ablage"
					desc="Dateien in der Notch ablegen und als Prompt bereitstellen"
					divider={false}
				>
					<label className="toggle-switch">
						<input
							type="checkbox"
							checked={aiShelf}
							onChange={toggleAiShelf}
						/>
						<span className="slider"></span>
					</label>
				</SettingRow>
			</div>
		</>
	);
}
