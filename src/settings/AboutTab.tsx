import { Download, RefreshCw, FileDown, Upload } from "lucide-react";
import { openUrl } from "@tauri-apps/plugin-opener";
import { GithubIcon } from "../icons";
import { SettingRow } from "./SettingRow";

interface AboutTabProps {
	appVersion: string;
	autoUpdate: boolean;
	toggleAutoUpdate: () => void;
	updateStatus: string;
	updateVersion: string;
	checkForUpdates: () => void;
	installUpdate: () => void;
	exportStatus: string;
	importStatus: string;
	handleExportSettings: () => void;
	handleImportSettings: () => void;
}

export function AboutTab({
	appVersion,
	autoUpdate,
	toggleAutoUpdate,
	updateStatus,
	updateVersion,
	checkForUpdates,
	installUpdate,
	exportStatus,
	importStatus,
	handleExportSettings,
	handleImportSettings
}: AboutTabProps) {
	const getUpdateLabel = () => {
		switch (updateStatus) {
			case "checking":
				return "Suche nach Updates...";
			case "available":
				return `Update verfügbar (v${updateVersion})`;
			case "uptodate":
				return "Bloom ist auf dem neuesten Stand";
			case "downloading":
				return "Update wird heruntergeladen...";
			case "installing":
				return "Wird installiert...";
			case "error":
				return "Keine Updates gefunden";
			default:
				return "Nach Updates suchen";
		}
	};

	const getUpdateDesc = () =>
		updateStatus === "available"
			? "Klicken zum Installieren und Neustarten"
			: `Installierte Version: v${appVersion}`;

	const getExportLabel = () => {
		if (exportStatus === "exporting") return "Exportiere...";
		if (exportStatus === "success") return "Erfolgreich exportiert!";
		if (exportStatus === "error") return "Export fehlgeschlagen. Erneut versuchen.";
		return "Einstellungen exportieren";
	};

	const getImportLabel = () => {
		if (importStatus === "importing") return "Importiere...";
		if (importStatus === "success") return "Erfolgreich importiert!";
		if (importStatus === "error") return "Import fehlgeschlagen. Bitte Datei prüfen.";
		return "Einstellungen importieren";
	};

	return (
		<div className="about-tab-container">
			<div className="about-header">
				<img src="/bloom.png" className="about-logo" alt="Bloom Logo" draggable={false} />
				<h1 className="about-title">Bloom</h1>
				<p className="about-version">Version {appVersion}</p>
				<p className="about-credit">
					Made with <span className="about-heart">❤️</span> by{" "}
					<button
						className="about-author"
						onClick={() => openUrl("https://github.com/SehajveerSingh2005")}
						title="sehaz on GitHub"
					>
						<GithubIcon size={12} />
						<span>sehaz</span>
					</button>
				</p>
			</div>

			<div className="setting-group-label">Software-Updates</div>
			<div className="setting-group">
				<SettingRow icon={Download} label="Automatische Updates" desc="Beim Start automatisch nach Updates suchen">
					<label className="toggle-switch">
						<input type="checkbox" checked={autoUpdate} onChange={toggleAutoUpdate} />
						<span className="slider"></span>
					</label>
				</SettingRow>

				<SettingRow
					icon={RefreshCw}
					label={getUpdateLabel()}
					desc={getUpdateDesc()}
					action
					divider={false}
					onClick={() => (updateStatus === "available" ? installUpdate() : checkForUpdates())}
				/>
			</div>

			<div className="setting-group-label setting-group-label--spaced">Einstellungen sichern</div>
			<div className="setting-group">
				<SettingRow
					icon={FileDown}
					label={getExportLabel()}
					desc="Einstellungen in Datei exportieren"
					action
					onClick={handleExportSettings}
				/>
				<SettingRow
					icon={Upload}
					label={getImportLabel()}
					desc="Einstellungen aus Datei importieren"
					action
					divider={false}
					onClick={handleImportSettings}
				/>
			</div>
		</div>
	);
}
