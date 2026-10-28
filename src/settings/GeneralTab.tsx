import { Power, Download, Clock, BatteryWarning, RefreshCw, RotateCcw, LogOut } from "lucide-react";
import { SettingRow } from "./SettingRow";

interface GeneralTabProps {
	autostart: boolean;
	toggleAutostart: () => void;
	timeFormat24h: boolean;
	toggleTimeFormat24h: () => void;
	showUpdateIndicator: boolean;
	toggleUpdateIndicator: () => void;
	lowBatteryThreshold: number;
	handleThresholdChange: (val: number) => void;
	restartBloom: () => void;
	resetToDefaults: () => void;
	quitBloom: () => void;
}

export function GeneralTab({
	autostart,
	toggleAutostart,
	timeFormat24h,
	toggleTimeFormat24h,
	showUpdateIndicator,
	toggleUpdateIndicator,
	lowBatteryThreshold,
	handleThresholdChange,
	restartBloom,
	resetToDefaults,
	quitBloom
}: GeneralTabProps) {
	return (
		<>
			<div className="setting-group-label">System</div>
			<div className="setting-group">
				<SettingRow icon={Power} label="Mit Windows starten" desc="Bloom beim Systemstart öffnen">
					<label className="toggle-switch">
						<input type="checkbox" checked={autostart} onChange={toggleAutostart} />
						<span className="slider"></span>
					</label>
				</SettingRow>

				<SettingRow
					icon={Download}
					label="Update-Hinweis"
					desc="Grünen Punkt anzeigen, wenn Update verfügbar"
				>
					<label className="toggle-switch">
						<input type="checkbox" checked={showUpdateIndicator} onChange={toggleUpdateIndicator} />
						<span className="slider"></span>
					</label>
				</SettingRow>

				<SettingRow icon={Clock} label="24-Stunden-Format" desc="24-Stunden-Uhrzeit verwenden">
					<label className="toggle-switch">
						<input type="checkbox" checked={timeFormat24h} onChange={toggleTimeFormat24h} />
						<span className="slider"></span>
					</label>
				</SettingRow>

				<SettingRow
					icon={BatteryWarning}
					label="Akkustand-Warnung"
					desc={`Warnung bei ${lowBatteryThreshold}%`}
					divider={false}
				>
					<input
						type="range"
						min="5"
						max="50"
						step="5"
						value={lowBatteryThreshold}
						onChange={(e) => handleThresholdChange(parseInt(e.target.value))}
						className="settings-slider"
					/>
				</SettingRow>
			</div>

			<div className="setting-group-label">Anwendung</div>
			<div className="setting-group">
				<SettingRow
					icon={RotateCcw}
					label="Auf Standard zurücksetzen"
					desc="Alle Einstellungen zurücksetzen und Bloom neu starten"
					action
					danger
					onClick={resetToDefaults}
				/>
				<SettingRow
					icon={RefreshCw}
					label="Bloom neu starten"
					desc="Alle Komponenten neu initialisieren"
					action
					onClick={restartBloom}
				/>
				<SettingRow
					icon={LogOut}
					label="Bloom beenden"
					desc="Anwendung vollständig beenden"
					action
					danger
					onClick={quitBloom}
					divider={false}
				/>
			</div>
		</>
	);
}
