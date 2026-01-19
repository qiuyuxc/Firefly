import {
	LinkPreset,
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/config";
import { siteConfig } from "./siteConfig";

const getDynamicNavBarConfig = (): NavBarConfig => {
	const links: (NavBarLink | LinkPreset)[] = [
		// 主页 & 归档
		LinkPreset.Home,
		LinkPreset.Archive,
	];

	// ===== Links（原 Links 菜单）=====
	links.push({
		name: "Links",
		url: "/links/",
		icon: "material-symbols:link",
		children: [
			{
				name: "GitHub",
				url: "https://github.com/qiuyuxc/Mizuki",
				external: true,
				icon: "fa6-brands:github",
			},
			{
				name: "Bilibili",
				url: "https://space.bilibili.com/1366400407",
				external: true,
				icon: "fa6-brands:bilibili",
			},
			{
				name: "Gitee",
				url: "https://gitee.com/matsuzakayuki/Mizuki",
				external: false,
				icon: "mdi:git",
			},
		],
	});

	// ===== My =====
	links.push({
		name: "我的",
		url: "/content/",
		icon: "material-symbols:person",
		children: [
			{
				name: "图床",
				url: "https://im.quiyu.cn",
				external: true,
				icon: "material-symbols:cloud-outline",
			},
		],
	});

	// ===== Friends（保留 preset）=====
	links.push(LinkPreset.Friends);

	// ===== 关于 =====
	links.push({
		name: "关于",
		url: "/content/",
		icon: "material-symbols:info",
		children: [
			LinkPreset.About,
			LinkPreset.Friends,
		],
	});

	// ===== Others =====
	links.push({
		name: "其他",
		url: "#",
		icon: "material-symbols:more-horiz",
		children: [
			{
				name: "站点状态",
				url: "https://star.quiyu.cn",
				external: true,
				icon: "material-symbols:vital-signs",
			},
			{
				name: "Umami",
				url: "https://cloud.umami.is/share/n1v9LfSuJEOe7HoO",
				external: true,
				icon: "material-symbols:bar-chart",
			},
			{
				name: "EdgeOne 监控大屏",
				url: "https://nmer.quiyu.cn/",
				external: true,
				icon: "material-symbols:dashboard-outline",
			},
		],
	});

	// ===== 可选页面（保持你之前那套开关逻辑）=====
	if (siteConfig.pages.guestbook) {
		links.push(LinkPreset.Guestbook);
	}

	return { links } as NavBarConfig;
};

// 搜索配置（不动）
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();