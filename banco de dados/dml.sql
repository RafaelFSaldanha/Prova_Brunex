use provaVilaoDB;

insert into tb_vilao (nm_vilao, ds_maldades, bt_super_poder)
	values ("Thanos", "Destruiu o mundo", true);
insert into tb_vilao (nm_vilao, ds_maldades, bt_super_poder)
	values ("Coringa", "Que homem", false);

select * from tb_vilao;


drop table tb_vilao;